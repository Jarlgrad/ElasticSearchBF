import {Injectable} from '@angular/core';
import {QueryResult} from './query-result';
import {Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QueryResultService{
  private queryResultsUrl = 'http://localhost:5444/api/home';
  private headers = new Headers({'Content-Type':'application/json'});

constructor(private http:Http){}

/**  getQueryResults():Promise<QueryResult[]>{
    return this.http.get(this.queryResultsUrl)
    .toPromise()
    .then(response => response.json().data as QueryResult[])
    .catch(this.handleError);
} */

getQueryResults():Observable<QueryResult[]>{
  return this.http.get(this.queryResultsUrl)
  .map(this.extractData)
  .catch(this.handleError);
}

private extractData(res: Response) {
  let body = res.json();
  return body.data || {};
}

private handleError(error:any): Promise<any> {
  let errMsg = (error.message) ? error.message :
  error.status ? `${error.status} - ${error.statusText}` : `Server error`;
  return Promise.reject(error.message||error);
}

 update(input:QueryResult):Promise<QueryResult>{
   const url =`${this.queryResultsUrl}/${input.id}`;
   return this.http
   .put(url,JSON.stringify(input),{headers:this.headers})
   .toPromise()
   .then(()=>input)
   .catch(this.handleError);
 }

 /** Hämtar resultat ur en array från baserat på dess Id
   getQueryResult(id: number): Observable<QueryResult> {
   return this.getQueryResults()
     .then(queryResults => queryResults.find(queryResult => queryResult.id === id));
 } */

/** Så här kan det se ut om de ska gå långsamt
getSlowQueryResults():Promise<QueryResult[]>{
return new Promise<QueryResult[]>(resolve =>
setTimeout(resolve, 2000)).
then(() => this.getQueryResults());
} */



}
