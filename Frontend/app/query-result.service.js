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
require('rxjs/add/operator/toPromise');
var QueryResultService = (function () {
    function QueryResultService(http) {
        this.http = http;
        this.queryResultsUrl = 'http://localhost:5444/api/home';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    /**  getQueryResults():Promise<QueryResult[]>{
        return this.http.get(this.queryResultsUrl)
        .toPromise()
        .then(response => response.json().data as QueryResult[])
        .catch(this.handleError);
    } */
    QueryResultService.prototype.getQueryResults = function () {
        return this.http.get(this.queryResultsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QueryResultService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    QueryResultService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : "Server error";
        return Promise.reject(error.message || error);
    };
    QueryResultService.prototype.update = function (input) {
        var url = this.queryResultsUrl + "/" + input.id;
        return this.http
            .put(url, JSON.stringify(input), { headers: this.headers })
            .toPromise()
            .then(function () { return input; })
            .catch(this.handleError);
    };
    QueryResultService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QueryResultService);
    return QueryResultService;
}());
exports.QueryResultService = QueryResultService;
//# sourceMappingURL=query-result.service.js.map