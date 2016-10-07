import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { DropdownComponent } from './dropdown.component';


import { SearchService } from './search.service';
import { QueryResult } from './query-result';
import {ResultOverviewComponent} from './result-overview.component'

@Component({
  selector: 'my-search-input',
  templateUrl: 'app/search-input.component.html',
})
export class SearchInputComponent implements OnInit {


  private types = new Array<String>();
  private searchInput = new Subject<string>();
  searchQueryResults: Observable<QueryResult[]>;
  searchTerm: string;
  resultOverview: ResultOverviewComponent;
  public hits = new Array<QueryResult>();
  // private types = new Array<String>();
  private allData: Object;
  selectedResult: QueryResult;


  constructor(
    private searchService: SearchService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTypes(this.types);
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

  getTypes(types: Array<String>): void {

    this.searchService.getQueryTypes()
      .subscribe(
      data => this.setTypeResult(data),
      error => alert("nåt gick fel!: " + error)
      );
    types.forEach((item, index) => {
      this.types[index] = item;
    }, this)
  }

  setTypeResult(array: Array<String>): void {
    array.forEach((item, index) => {
      this.types[index] = item;
      // JSON.stringify(this.hits[index]._source);
    });
    console.log(this.types);
  }

  addTypeToQuery(query: string, type: string): void {
    this.hits

    if (query.length === 0) {
      this.searchService.addTypeToQuery(type);
    }
    else
      this.updateSearchWithType(query, type);

    console.log(type);

  }

  onTyping(term: string): void {
    if (term.length > 0) {
      this.searchInput.next(term);
      this.searchTerm = term;
      this.search(this.searchTerm);
    }
  }

  search(input: string): void {
    this.searchService.search(input)
      .subscribe(
      data => this.setResult(data, data.hits.hits),
      error => alert(error));
  }

  updateSearchWithType(query: string, type: string): void {
    this.searchService.updateSearchWithType(query, type)
      .subscribe(
      data => this.setResult(data, data.hits.hits),
      error => alert(error));
  }

  onSelect(queryResult: QueryResult): void {
    this.selectedResult = queryResult;
  }
  setResult(data: Object, array: Array<QueryResult>): void {
    this.allData = data;
    array.forEach((item, index) => {
      this.hits[index] = item;
      // JSON.stringify(this.hits[index]._source);

    });
  }
  // setTypeResult(array:Array<String>): void {
  //     console.log(array);
  //     array.forEach((item, index) => {
  //     this.types[index] = item;
  //     console.log(this.types);
  //     // JSON.stringify(this.hits[index]._source);
  //   });
  // } 
}
