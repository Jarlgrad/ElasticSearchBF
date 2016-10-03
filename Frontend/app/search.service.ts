import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import { QueryResult } from './query-result';

@Injectable()
export class SearchService {

  private queryResultsUrl = 'http://localhost:5444/api/home';
  private headers = new Headers({'Content-Type':'application/json'});
  private searchResultUrl = 'http://localhost:5444/api/home?input=tuim';
  constructor (private http: Http) {}
  searchResults:Array<string>;
  /**search(query: string): Observable<QueryResult[]> {
    let searchResultUrltest = 'http://localhost:5444/api/home/?query=ei';
    return this.http
               .get(this.searchResultUrl )
               .map((r: Response) => r.json() as QueryResult[]);
  }*/

  search(query: string) {
    return this.http
               .get(this.queryResultsUrl + `?input=${query}`)
               .map((res) => res.json());
  }

/**  getQueryResults():Observable<QueryResult[]>{
    console.log(this.searchResultUrl);
    return this.http.get(this.searchResultUrl)
    .map(this.extractData);
  }*/

  getQueryResults(){
      console.log("jag är i querydata");
    return this.http.get(this.searchResultUrl)
    .map(res => res.json());
    /**catch(this.handleError)*/
  }

  private extractData(res: Response) {
    console.log("jag är i extractData");
    let body = res.json();
    console.log(body);
    return body.data || {};
  }

  /**private handleError(error:any): Observable<any> {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    return Observable.throw(errMsg);
  }*/
}
