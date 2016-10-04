import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router }            from '@angular/router';

import { QueryResult } from './query-result';
import { QueryResultService } from './query-result.service';
import { SearchService } from './search.service';
import { SearchInputComponent } from './search-input.component';

@Component({
selector:'my-result-overview',
  templateUrl:'app/result-overview.component.html',
  providers:[SearchService]
})

export class ResultOverviewComponent implements OnInit{
 ngOnInit(): void {
   this.searchQueryResults = this.searchInput
      .debounceTime(100)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
      ? this.searchService.search(term) // return the http search observable
      : Observable.of<QueryResult[]>([])) // or the observable of empty heroes if no search term
      .catch(error => {
        console.log(error);
        return Observable.of<QueryResult[]>([]);
      });
   }

   private searchInput = new Subject<string>();
   searchQueryResults: Observable<QueryResult[]>;
   mode = 'observable';
   selectedResult:QueryResult;
   private  hits = new Array<QueryResult>();
   private  allData:Object;
  constructor(
    private queryResultService:QueryResultService,
    private searchService:SearchService,
    private router: Router){}


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

  search(input:string): void{
   this.searchService.search(input)
   .subscribe(
   data => this.setResult(data,data.hits.hits),
   error => alert(error));
    }


}
