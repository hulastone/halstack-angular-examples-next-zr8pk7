import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-controlled-textarea.component.html',
  styleUrls: ['./v3-controlled-textarea.component.scss']
})
export class V3ControlledTextareaComponent implements OnInit {

  inputValue: string;

  constructor() {}

  ngOnInit(): void {
  }
  onChange(value) {
    if (value.length <= 5) {
      this.inputValue = value;
    }
  }

  onBlur(event) {
    console.log("textarea-default blur event");
  }

}
