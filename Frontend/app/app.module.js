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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("./rxjs-extensions");
var app_component_1 = require("./app.component");
var query_result_component_1 = require("./query-result.component");
var kibana_component_1 = require("./kibana.component");
var query_result_service_1 = require("./query-result.service");
var app_routing_1 = require("./app.routing");
var result_overview_component_1 = require("./result-overview.component");
var previous_query_component_1 = require("./previous-query.component");
var search_service_1 = require("./search.service");
var search_input_component_1 = require("./search-input.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_1.routing],
        declarations: [app_component_1.AppComponent,
            query_result_component_1.QueryResultComponent,
            kibana_component_1.KibanaComponent,
            result_overview_component_1.ResultOverviewComponent,
            search_input_component_1.SearchInputComponent,
            previous_query_component_1.PreviousQueryComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [query_result_service_1.QueryResultService,
            search_service_1.SearchService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map