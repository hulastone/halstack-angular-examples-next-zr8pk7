import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-sized-select.component.html',
  styleUrls: ['./v3-sized-select.component.scss']
})
export class V3SizedSelectComponent implements OnInit {

  inputValue;
  optionsWithOnlyIcons = [
    {
      value: "1",
      iconSrc: "assets/img/facebook-bl.svg"
    },
    {
      value: "2",
      iconSrc: "assets/img/twitter-bl.svg"
    },
    {
      value: "3",
      iconSrc: "assets/img/linkedin-bl.svg"
    }
  ];
  constructor() {}

  ngOnInit(): void {
  }

  onChange(value) {
    this.inputValue = value;
    console.log(value);
  }

}
