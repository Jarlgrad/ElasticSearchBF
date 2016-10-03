import { Component, Input } from '@angular/core';

import { QueryResult } from './query-result';
import { QueryResultService } from './query-result.service';


@Component({
  selector: 'my-query-result',
  templateUrl: 'app/query-result.component.html'
})

export class QueryResultComponent {
  @Input()
  queryResult: QueryResult;
  constructor(private queryResultService:QueryResultService){}
  save():void{
    this.queryResultService.update(this.queryResult);
  }
}
