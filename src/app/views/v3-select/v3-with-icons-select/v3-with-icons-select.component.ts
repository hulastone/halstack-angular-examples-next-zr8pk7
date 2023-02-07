import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-with-icons-select.component.html',
  styleUrls: ['./v3-with-icons-select.component.scss']
})
export class V3WithIconsSelectComponent implements OnInit {

  inputValue;
  optionsWithIcons = [
    {
      value: "1",
      label: "Facebook",
      iconSrc: "assets/img/facebook-bl.svg"
    },
    {
      value: "2",
      label: "Twitter",
      iconSrc: "assets/img/twitter-bl.svg"
    },
    {
      value: "3",
      label: "Linkedin",
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
