import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-controlled-select.component.html',
  styleUrls: ['./v3-controlled-select.component.scss']
})
export class V3ControlledSelectComponent implements OnInit {

  inputValue;
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

  constructor() { }

  ngOnInit(): void {
    this.inputValue = "1";
  }

  onChange(value) {
    this.inputValue = value;
  }

}
