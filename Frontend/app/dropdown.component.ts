import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'my-dropdown',
  /**  pipes: [SearchPipe], */
  templateUrl:'app/dropdown.component.html'
  
})

export class DropdownComponent implements OnInit{

  private types = new Array<String>();

  constructor(private searchService:SearchService){}

ngOnInit():void{
  this.getTypes(this.types)
}


getTypes(types:Array<String>):void {

  this.searchService.getQueryTypes()
  .subscribe(
    data => this.setTypeResult(data),
    error => alert("nåt gick fel!: " + error)
  );
  types.forEach((item, index) => {
  this.types[index] = item;
  }, this)
}
 
setTypeResult(array:Array<String>): void {
     array.forEach((item, index) => {
     this.types[index] = item;
      // JSON.stringify(this.hits[index]._source);
   });
   console.log(this.types);
  } 

  addTypeToQuery(input:String): void{
    this.searchService.addTypeToQuery(input);
    console.log(input);
  }
}