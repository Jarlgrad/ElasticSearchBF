import { Component } from '@angular/core';

@Component({
  selector: 'my-dropdown',
  /**  pipes: [SearchPipe], */
  template: `<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
  </div>
`
})

export class DropdownComponent { }