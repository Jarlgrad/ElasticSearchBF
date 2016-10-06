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
}
