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
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
var search_service_1 = require("./search.service");
var result_overview_component_1 = require("./result-overview.component");
var SearchInputComponent = (function () {
    function SearchInputComponent(searchService, router, resultOverview) {
        this.searchService = searchService;
        this.router = router;
        this.resultOverview = resultOverview;
        this.searchInput = new Subject_1.Subject();
        this.hits = new Array();
    }
    SearchInputComponent.prototype.ngOnInit = function () {
    };
    SearchInputComponent.prototype.onTyping = function (term) {
        if (term.length > 2) {
            this.searchInput.next(term);
            this.searchTerm = term;
            this.resultOverview.search(this.searchTerm);
        }
    };
    return SearchInputComponent;
}());
SearchInputComponent = __decorate([
    core_1.Component({
        selector: 'my-search-input',
        templateUrl: 'app/search-input.component.html',
        providers: [result_overview_component_1.ResultOverviewComponent]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [search_service_1.SearchService,
        router_1.Router,
        result_overview_component_1.ResultOverviewComponent])
], SearchInputComponent);
exports.SearchInputComponent = SearchInputComponent;
//# sourceMappingURL=search-input.component.js.map