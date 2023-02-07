import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-multiple-select.component.html',
  styleUrls: ['./v3-multiple-select.component.scss']
})
export class V3MultipleSelectComponent implements OnInit {

  multipleSelected = [""];
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

  onChange(event) {
    this.multipleSelected = event;
  }
}
