import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-with-icons',
  templateUrl: './dropdown-with-icons.component.html',
  styleUrls: ['./dropdown-with-icons.component.scss']
})
export class DropdownWithIconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected($event) {
    console.log($event);
  }

}
