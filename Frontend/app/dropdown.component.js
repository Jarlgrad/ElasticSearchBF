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
var search_service_1 = require('./search.service');
var DropdownComponent = (function () {
    function DropdownComponent(searchService) {
        this.searchService = searchService;
        this.types = new Array();
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.getTypes(this.types);
    };
    DropdownComponent.prototype.getTypes = function (types) {
        var _this = this;
        this.searchService.getQueryTypes()
            .subscribe(function (data) { return _this.setTypeResult(data); }, function (error) { return alert(error + "nåt gick fel!"); });
        types.forEach(function (item, index) {
            _this.types[index] = item;
        }, this);
    };
    DropdownComponent.prototype.setTypeResult = function (array) {
        var _this = this;
        array.forEach(function (item, index) {
            _this.types[index] = item;
            // JSON.stringify(this.hits[index]._source);
        });
        console.log(this.types);
    };
    DropdownComponent.prototype.addToQuery = function (input) {
        console.log(input);
    };
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'my-dropdown',
            /**  pipes: [SearchPipe], */
            templateUrl: 'app/dropdown.component.html'
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map