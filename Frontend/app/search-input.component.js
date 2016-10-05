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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var search_service_1 = require('./search.service');
var SearchInputComponent = (function () {
    function SearchInputComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.searchInput = new Subject_1.Subject();
        this.hits = new Array();
    }
    SearchInputComponent.prototype.ngOnInit = function () {
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
        // this.getTypes(this.types)
    };
    //     this.getTypes(this.types)
    // getTypes(types:Array<String>):void {
    //   this.searchService.getQueryTypes()
    //   .subscribe(
    //     data => this.setTypeResult(data),
    //     error => alert(error + "nåt gick fel!")
    //   );
    //   console.log(types);
    //   types.forEach((item, index) => {
    //   this.types[index] = item;
    //   }, this)
    // }
    SearchInputComponent.prototype.onTyping = function (term) {
        if (term.length > 0) {
            this.searchInput.next(term);
            this.searchTerm = term;
            this.search(this.searchTerm);
        }
    };
    SearchInputComponent.prototype.search = function (input) {
        var _this = this;
        this.searchService.search(input)
            .subscribe(function (data) { return _this.setResult(data, data.hits.hits); }, function (error) { return alert(error); });
    };
    SearchInputComponent.prototype.onSelect = function (queryResult) {
        this.selectedResult = queryResult;
    };
    SearchInputComponent.prototype.setResult = function (data, array) {
        var _this = this;
        this.allData = data;
        array.forEach(function (item, index) {
            _this.hits[index] = item;
            // JSON.stringify(this.hits[index]._source);
        });
    };
    SearchInputComponent = __decorate([
        core_1.Component({
            selector: 'my-search-input',
            templateUrl: 'app/search-input.component.html',
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService, router_1.Router])
    ], SearchInputComponent);
    return SearchInputComponent;
}());
exports.SearchInputComponent = SearchInputComponent;
//# sourceMappingURL=search-input.component.js.map