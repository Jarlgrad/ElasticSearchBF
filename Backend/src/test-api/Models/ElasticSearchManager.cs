using test_api.Models;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Text;
using System.Diagnostics;
using Elasticsearch.Net;

namespace test_api.Models
{
    public class ElasticSearchManager
    {
        #region Setup connection to host and database
        public static Uri node = new Uri("http://localhost:9200/");
        public static ConnectionSettings settings = new ConnectionSettings(node).DefaultIndex("multidb").
            DisableDirectStreaming().
            OnRequestCompleted(details =>
            {
                Debug.WriteLine("### ES REQUEST ###");
                if (details.RequestBodyInBytes != null) Debug.WriteLine(Encoding.UTF8.GetString(details.RequestBodyInBytes));
                Debug.WriteLine("### ES RESPONSE ###");
                if (details.ResponseBodyInBytes != null) Debug.WriteLine(Encoding.UTF8.GetString(details.ResponseBodyInBytes));
            })
            .PrettyJson();



        public static ElasticClient client = new ElasticClient(settings);
        #endregion

        #region Fungerande metoder

        //Används ej längre. 2 inparametrar, bra att behålla för ev. test.
        internal string Search(string query, string field)
        {

            if (query.Length < 1)
            {
                
            }
            Field searchField = new Field(field);

            var result =
            client.Search<dynamic>(r => r
            .Size(100)
            .AllTypes()
            .Query(q => q
            .QueryString(qs => qs
            .Query($"*{query}*")
            .Fields(searchField)
            .Rewrite(RewriteMultiTerm.ScoringBoolean)
            )
            )
            );

            var response = client.Serializer.SerializeToString(result);
            return response;
        }

        internal string Search(string query, string field, string type)
        {
            Field searchField = new Field(field);
            ISearchResponse<dynamic> result;
            if (type == "")
            {
                result = client.Search<dynamic>(r => r
                .Size(1)
                .AllTypes()
                .Query(q => q
                .QueryString(qs => qs
                .Query($"*{query}*")
                .Fields(searchField)
                .Rewrite(RewriteMultiTerm.ScoringBoolean)
                )
                )
                );
            }
            else
            {
                Types types = Types.Parse(type);
                result = client.Search<dynamic>(r => r
                .Size(1)
                .Type(types)
                .Query(q => q
                .QueryString(qs => qs
                .Query($"*{query}*")
                .Fields(searchField)
                .Rewrite(RewriteMultiTerm.ScoringBoolean)
                )
                )
                );
            }


            var response = client.Serializer.SerializeToString(result);
            return response;
        }

        public string GetAllIndices()
        {
            var result = client.Search<dynamic>(s => s
           .AllIndices()
           .AllTypes()
           .From(0).Size(2000));

            //Serializes result to jsonstring
            var response = client.Serializer.SerializeToString(result);
            return response;
        }
        #endregion

        /// <summary>
        /// Fetches The index multidb and its Value - giving access to Mappings(types). Then adds the types to a list of strings, serializes and returns the list to Http.
        /// </summary>
        /// <returns>List<string> with Types</returns>
        public string GetAllTypes()
        {
            var allMappings = client.GetIndex("multidb").Indices.First().Value.Mappings.ToList();
            List<string> typeList = allMappings.Select(x => x.Key.Name).ToList();    

            //Serializes result to jsonstring
            var response = client.Serializer.SerializeToString(typeList);
            return response;       
        }
    }
}
