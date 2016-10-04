import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryResultComponent } from './query-result.component';
import { KibanaComponent } from './kibana.component';
import { AppComponent } from './app.component';
import { ResultOverviewComponent } from './result-overview.component';
import { PreviousQueryComponent } from './previous-query.component';

const appRoutes: Routes = [
  {
    path: 'kibana',
    component:KibanaComponent
  },
  {
    path:'queryresult',
    component:QueryResultComponent
  },
  {
    path:'previousquery/:id',
    component:PreviousQueryComponent
  },
  {
    path:'resultoverview',
    component:ResultOverviewComponent
  },
  {
      path:'',
      redirectTo:'/resultoverview',
      pathMatch:'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
