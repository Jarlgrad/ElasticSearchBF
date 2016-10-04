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
var query_result_1 = require('./query-result');
var query_result_service_1 = require('./query-result.service');
var QueryResultComponent = (function () {
    function QueryResultComponent(queryResultService) {
        this.queryResultService = queryResultService;
    }
    QueryResultComponent.prototype.save = function () {
        this.queryResultService.update(this.queryResult);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', query_result_1.QueryResult)
    ], QueryResultComponent.prototype, "queryResult", void 0);
    QueryResultComponent = __decorate([
        core_1.Component({
            selector: 'my-query-result',
            templateUrl: 'app/query-result.component.html'
        }), 
        __metadata('design:paramtypes', [query_result_service_1.QueryResultService])
    ], QueryResultComponent);
    return QueryResultComponent;
}());
exports.QueryResultComponent = QueryResultComponent;
//# sourceMappingURL=query-result.component.js.map