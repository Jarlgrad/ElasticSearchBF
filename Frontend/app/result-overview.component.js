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
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var router_1 = require("@angular/router");
var query_result_service_1 = require("./query-result.service");
var search_service_1 = require("./search.service");
var ResultOverviewComponent = (function () {
    function ResultOverviewComponent(queryResultService, searchService, router) {
        this.queryResultService = queryResultService;
        this.searchService = searchService;
        this.router = router;
        this.searchInput = new Subject_1.Subject();
        this.mode = 'observable';
        this.hits = new Array();
    }
    ResultOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchQueryResults = this.searchInput
            .debounceTime(100) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.searchService.search(term) // return the http search observable
            : Observable_1.Observable.of([]); }) // or the observable of empty heroes if no search term
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    ResultOverviewComponent.prototype.onSelect = function (queryResult) {
        this.selectedResult = queryResult;
    };
    ResultOverviewComponent.prototype.setResult = function (data, arrayOfQueryResult) {
        var _this = this;
        this.allData = data;
        arrayOfQueryResult.forEach(function (item, index) {
            _this.hits[index] = item;
            JSON.stringify(_this.hits[index]._source);
        });
    };
    ResultOverviewComponent.prototype.search = function (input) {
        var _this = this;
        this.searchService.search(input)
            .subscribe(function (data) { return _this.setResult(data, data.hits.hits); }, function (error) { return alert(error); });
    };
    return ResultOverviewComponent;
}());
ResultOverviewComponent = __decorate([
    core_1.Component({
        selector: 'my-result-overview',
        templateUrl: 'app/result-overview.component.html',
        providers: [search_service_1.SearchService]
    }),
    __metadata("design:paramtypes", [query_result_service_1.QueryResultService,
        search_service_1.SearchService,
        router_1.Router])
], ResultOverviewComponent);
exports.ResultOverviewComponent = ResultOverviewComponent;
//# sourceMappingURL=result-overview.component.js.map