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
var query_result_service_1 = require('./query-result.service');
var search_service_1 = require('./search.service');
var ResultOverviewComponent = (function () {
    /**  ngOnInit(): void {
        this.getQueryResults();
        console.log(this.queryResults);
       }*/
    function ResultOverviewComponent(queryResultService, searchService) {
        this.queryResultService = queryResultService;
        this.searchService = searchService;
        this.mode = 'observable';
    }
    ResultOverviewComponent.prototype.onSelect = function (queryResult) {
        this.selectedResult = queryResult;
    };
    ResultOverviewComponent.prototype.save = function () {
        //Här vill vi spara undan sökningen i minnet.
    };
    ResultOverviewComponent = __decorate([
        core_1.Component({
            selector: 'my-result-overview',
            templateUrl: 'app/result-overview.component.html',
            providers: [search_service_1.SearchService]
        }), 
        __metadata('design:paramtypes', [query_result_service_1.QueryResultService, search_service_1.SearchService])
    ], ResultOverviewComponent);
    return ResultOverviewComponent;
}());
exports.ResultOverviewComponent = ResultOverviewComponent;
//# sourceMappingURL=result-overview.component.js.map