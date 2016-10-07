import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { SearchInputComponent } from './search-input.component';

@Component({
  selector: 'my-dropdown',
  /**  pipes: [SearchPipe], */
  templateUrl: 'app/dropdown.component.html',
  providers: [SearchInputComponent]
})

export class DropdownComponent implements OnInit {

  private types = new Array<String>();

  constructor(private searchService: SearchService, private searchInputComponent: SearchInputComponent) { }

  ngOnInit(): void {
    this.getTypes(this.types)
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

  addTypeToQuery(type: string): void {
    this.searchInputComponent.hits

    if (this.searchInputComponent.hits.length === 0) {
      this.searchService.addTypeToQuery(type);
    }
    else
      this.searchInputComponent.updateSearchWithType(type);

    console.log(type);

  }
}