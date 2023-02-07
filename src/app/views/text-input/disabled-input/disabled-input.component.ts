import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './disabled-input.component.html',
  styleUrls: ['./disabled-input.component.scss']
})
export class DisabledInputComponent implements OnInit {

  controlledValue = "";

  constructor() {}

  ngOnInit(): void {
  }

  onBlur({ value, error }) {
    this.controlledValue = value;
  }

  onChange({value, error }) {
    this.controlledValue = value;
  }

  click() {
    console.log("Click");
  }
}
