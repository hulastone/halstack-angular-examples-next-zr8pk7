import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-uncontrolled-select.component.html',
  styleUrls: ['./v3-uncontrolled-select.component.scss']
})
export class V3UncontrolledSelectComponent implements OnInit {

  optionsWithoutIcon = [
    {
      value: "1",
      label: "Facebook"
    },
    {
      value: "2",
      label: "Twitter"
    },
    {
      value: "3",
      label: "Linkedin"
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  onUncontrolledChange($event) {
    console.log($event);
  }

}
