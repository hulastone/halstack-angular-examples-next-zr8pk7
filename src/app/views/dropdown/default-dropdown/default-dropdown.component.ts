import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './default-dropdown.component.html',
  styleUrls: ['./default-dropdown.component.scss']
})
export class DefaultDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected($event) {
    console.log($event);
  }

}
