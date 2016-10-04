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
var router_1 = require('@angular/router');
var query_result_service_1 = require('./query-result.service');
var search_service_1 = require('./search.service');
var AppComponent = (function () {
    function AppComponent(router, queryResultService, searchService) {
        this.router = router;
        this.queryResultService = queryResultService;
        this.searchService = searchService;
        this.queryResults = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryResultService.getQueryResults()
            .map(function (queryResults) { return _this.queryResults = queryResults.slice(0, 3); });
    };
    AppComponent.prototype.onSelect = function (queryResult) {
        this.selectedResult = queryResult;
    };
    AppComponent.prototype.showPreviousQueryResult = function (queryResult) {
        var link = ['/previousquery', queryResult.id];
        this.router.navigate(link);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            /**  pipes: [SearchPipe], */
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, query_result_service_1.QueryResultService, search_service_1.SearchService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map