import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { QueryResult } from './query-result';
import { QueryResultService } from './query-result.service';
import { SearchService } from './search.service';
import { SearchInputComponent } from './search-input.component';

@Component({
selector:'my-result-overview',
  templateUrl:'app/result-overview.component.html',
  providers:[SearchService]
})

export class ResultOverviewComponent{
/**  ngOnInit(): void {
    this.getQueryResults();
    console.log(this.queryResults);
   }*/

  constructor(
    private queryResultService:QueryResultService,
    private searchService:SearchService){}

  errorMessage: string;
  testResultat:string;
  queryResults:QueryResult[];
  selectedResult:QueryResult;
  mode = 'observable';

  onSelect(queryResult:QueryResult):void{
  this.selectedResult = queryResult;
}
  save():void{
  //Här vill vi spara undan sökningen i minnet.
  }

  /**getQueryResults():void{
  this.searchService.getQueryResults()
        .subscribe(
        queryResults => this.queryResults = queryResults,
        error => this.errorMessage = <any>error);
  }*/

  getQueryResults(){
  this.searchService.getQueryResults()
        .subscribe(
        data => this.testResultat = JSON.stringify(data),
        error => alert(error),
        () => console.log("Nu har jag kört getQueryResults"));
  }

  /** getQueryResults():void{
  this.queryResultService.getQueryResults()
  .map(queryResults => this.queryResults = queryResults);
} */
}
