﻿using test_api.Models;
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

        internal string Search(string query, string field)
        {
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
    }
}