import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './header-with-dropdown.component.html',
  styleUrls: ['./header-with-dropdown.component.scss']
})
export class HeaderWithDropdownComponent implements OnInit {

  optionsWithoutIcon = [
    {
      value: 1,
      label: "Facebook"
    },
    {
      value: 2,
      label: "Twitter"
    },
    {
      value: 3,
      label: "Linkedin"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
