"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.queryResultsUrl = 'http://localhost:5444/api/home';
        this.allUrl = this.queryResultsUrl + '?' + this.queryResultUrlType + '?' + this.queryResultUrlInput;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    /**search(query: string): Observable<QueryResult[]> {
      let searchResultUrltest = 'http://localhost:5444/api/home/?query=ei';
      return this.http
                 .get(this.searchResultUrl )
                 .map((r: Response) => r.json() as QueryResult[]);
    }*/
    SearchService.prototype.search = function (query) {
        console.log("URL Pre-Query:");
        console.log(this.allUrl);
        this.queryResultUrlInput = "input=" + query;
        return this.http
            .get(this.queryResultsUrl + '?' + this.queryResultUrlInput + '?&' + this.queryResultUrlType)
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.updateSearchWithType = function (query, type) {
        console.log("URL Pre-Query:");
        console.log(this.allUrl);
        this.queryResultUrlInput = "input=" + query;
        this.queryResultUrlType = "type=" + type;
        return this.http
            .get(this.queryResultsUrl + '?' + this.queryResultUrlInput + '?&' + this.queryResultUrlType)
            .map(function (res) { return res.json(); });
    };
    // search(query: string) {
    //   console.log("URL Pre-Query:");
    //   console.log(this.queryResultsUrl);
    //   this.queryResultUrlInput = `?input=${query}`;
    //   return this.http
    //              .get(this.queryResultsUrl + `?input=${query}`)
    //              .map((res) => res.json());
    // }
    SearchService.prototype.getQueryTypes = function () {
        return this.http
            .get(this.queryResultsUrl + "/1")
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.addTypeToQuery = function (type) {
        this.queryResultUrlType = "type=" + type;
        console.log(this.queryResultsUrl);
    };
    SearchService.prototype.extractData = function (res) {
        console.log("jag är i extractData");
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map