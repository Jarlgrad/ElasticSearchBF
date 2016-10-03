import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**import './rxjs-operators'; */

import { QueryResult } from './query-result';
import { QueryResultService } from './query-result.service';
import { SearchService } from './search.service';
import { SearchPipe } from './search-pipe';
import { SearchInputComponent } from './search-input.component';

@Component({
  selector: 'my-app',
/**  pipes: [SearchPipe], */
  templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit{
queryResults: QueryResult[]=[];
selectedResult:QueryResult;

constructor(
  private router: Router,
  private queryResultService: QueryResultService,
  private searchService: SearchService ){}

  ngOnInit():void{
    this.queryResultService.getQueryResults()
    .map(queryResults => this.queryResults = queryResults.slice(0,3));
  }

onSelect(queryResult:QueryResult):void{
this.selectedResult = queryResult;
}

showPreviousQueryResult(queryResult:QueryResult):void{
  let link = ['/previousquery', queryResult.id];
  this.router.navigate(link);
}

}
