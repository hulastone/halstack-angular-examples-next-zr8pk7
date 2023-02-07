import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-input-text.component.html',
  styleUrls: ['./controlled-input-text.component.scss']
})
export class ControlledInputTextComponent implements OnInit {

  inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    if (value.length <= 5) {
      this.inputValue = value;
    }
  }

  onBlur(event) {
    console.log("text-input-default blur event");
  }

}
