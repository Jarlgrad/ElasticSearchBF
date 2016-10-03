import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { QueryResult } from './query-result';
import { QueryResultService } from './query-result.service';

@Component ({
  selector: 'my-previous-query',
  templateUrl: 'app/previous-query.component.html'
})

export class PreviousQueryComponent implements OnInit{
  ngOnInit(): void {
/**
    TODO: denna metod ska hämta ut ett gammalt sökresultat
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.queryResultService.getQueryResult(id)
        .then(queryResult => this.queryResult = queryResult);
        this.queryid=id;
    }); */
  this.getQueryResults();
   }
  constructor(
    private queryResultService:QueryResultService,
    private route:ActivatedRoute ){}

  queryid: number;
  queryResults: QueryResult[];
  queryResult:QueryResult;
  selectedResult:QueryResult;

  onSelect(queryResult:QueryResult):void{
  this.selectedResult = queryResult;
}

  getQueryResults():void{
  this.queryResultService.getQueryResults()
  .map(queryResults => this.queryResults = queryResults);
  }
}
