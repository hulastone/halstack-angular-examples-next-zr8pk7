import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './default-dropdown-expand-on-hover.component.html',
  styleUrls: ['./default-dropdown-expand-on-hover.component.scss']
})
export class DefaultDropdownExpandOnHoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected($event) {
    console.log($event);
  }
}
