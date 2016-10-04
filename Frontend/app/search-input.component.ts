import { Component, OnInit, Injectable } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { SearchService } from './search.service';
import { QueryResult } from './query-result';
import {ResultOverviewComponent} from './result-overview.component'

@Component({
  selector: 'my-search-input',
  templateUrl: 'app/search-input.component.html',
    providers:[ResultOverviewComponent]
})

@Injectable()
export class SearchInputComponent implements OnInit {

  private searchInput = new Subject<string>();
  searchQueryResults: Observable<QueryResult[]>;
  searchTerm :string ;
  private  hits = new Array<QueryResult>();
  private  allData:Object;
  selectedResult:QueryResult;
constructor(
  private searchService:SearchService,
  private router: Router,
 private resultOverview:ResultOverviewComponent ) {}

ngOnInit():void{

  }

  onTyping(term:string):void{
    if (term.length>2) {
      this.searchInput.next(term);
      this.searchTerm = term;
      this.resultOverview.search(this.searchTerm);
    }
  }
/**
search(input:string): void{
 this.searchService.search(input)
 .subscribe(
 data => this.resultOverview.setResult(data,data.hits.hits),
 error => alert(error));
  }*/
/**
onSelect(queryResult:QueryResult):void{
  this.selectedResult = queryResult;
}
setResult(data:Object, arrayOfQueryResult:Array<QueryResult>): void {
  this.allData = data;
  arrayOfQueryResult.forEach((item, index) => {
    this.hits[index] = item;
    JSON.stringify(this.hits[index]._source);

  });
}
*/
}
