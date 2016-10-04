"use strict";
var router_1 = require("@angular/router");
var query_result_component_1 = require("./query-result.component");
var kibana_component_1 = require("./kibana.component");
var result_overview_component_1 = require("./result-overview.component");
var previous_query_component_1 = require("./previous-query.component");
var search_input_component_1 = require("./search-input.component");
var appRoutes = [
    {
        path: 'kibana',
        component: kibana_component_1.KibanaComponent
    },
    {
        path: 'queryresult',
        component: query_result_component_1.QueryResultComponent
    },
    {
        path: 'previousquery/:id',
        component: previous_query_component_1.PreviousQueryComponent
    },
    {
        path: 'resultoverview',
        component: result_overview_component_1.ResultOverviewComponent
    },
    {
        path: 'search',
        component: search_input_component_1.SearchInputComponent
    },
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map