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
var PreviousQueryComponent = (function () {
    function PreviousQueryComponent(queryResultService, route) {
        this.queryResultService = queryResultService;
        this.route = route;
    }
    PreviousQueryComponent.prototype.ngOnInit = function () {
        /**
            TODO: denna metod ska hämta ut ett gammalt sökresultat
            this.route.params.forEach((params: Params) => {
              let id = +params['id'];
              this.queryResultService.getQueryResult(id)
                .then(queryResult => this.queryResult = queryResult);
                this.queryid=id;
            }); */
        this.getQueryResults();
    };
    PreviousQueryComponent.prototype.onSelect = function (queryResult) {
        this.selectedResult = queryResult;
    };
    PreviousQueryComponent.prototype.getQueryResults = function () {
        var _this = this;
        this.queryResultService.getQueryResults()
            .map(function (queryResults) { return _this.queryResults = queryResults; });
    };
    PreviousQueryComponent = __decorate([
        core_1.Component({
            selector: 'my-previous-query',
            templateUrl: 'app/previous-query.component.html'
        }), 
        __metadata('design:paramtypes', [query_result_service_1.QueryResultService, router_1.ActivatedRoute])
    ], PreviousQueryComponent);
    return PreviousQueryComponent;
}());
exports.PreviousQueryComponent = PreviousQueryComponent;
//# sourceMappingURL=previous-query.component.js.map