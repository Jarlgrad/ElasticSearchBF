import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import './rxjs-extensions';


import { AppComponent }   from './app.component';
import { QueryResultComponent } from './query-result.component';
import { KibanaComponent } from './kibana.component';
import { QueryResultService } from './query-result.service';
import { routing } from './app.routing';
import { ResultOverviewComponent } from './result-overview.component';
import { PreviousQueryComponent } from './previous-query.component';
import { SearchService } from './search.service';
import { SearchInputComponent } from './search-input.component';
import { DropdownComponent} from './dropdown.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  JsonpModule,
                  routing 
                  ],
  declarations: [ AppComponent,
                  QueryResultComponent,
                  KibanaComponent,
                  ResultOverviewComponent,
                  SearchInputComponent,
                  PreviousQueryComponent,
                  DropdownComponent ],
  bootstrap:    [ AppComponent,
                  SearchInputComponent,
                  DropdownComponent ],
  providers:    [ QueryResultService,
                  SearchService]

})

export class AppModule { }
