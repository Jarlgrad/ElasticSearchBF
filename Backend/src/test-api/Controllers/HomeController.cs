using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using test_api.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;

namespace test_api.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class HomeController : ApiController
    {

        ElasticSearchManager _elasticSearchManager = new ElasticSearchManager();

        // GET api/values
        [HttpGet]
        public string Get(string input, string field = "_all")
        {
            //return _elasticSearchManager.GetAllIndices();
            return _elasticSearchManager.Search(input, field);
        }

        [HttpGet]
        public string GetFromFieldAndType(string input, string field = "_all",string type="_all")
        {
            //return _elasticSearchManager.GetAllIndices();
            return _elasticSearchManager.SearchAfterFieldAndType(input, field,type);
        }

        // GET api/values/5 
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
