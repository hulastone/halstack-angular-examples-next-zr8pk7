import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-input.component.html',
  styleUrls: ['./controlled-input.component.scss']
})
export class ControlledInputComponent implements OnInit {
  controlledValue = "Example text";

  constructor() {}

  ngOnInit(): void {
  }

  onBlur({ value, error }) {
    this.controlledValue = value;
  }

  onChange({ value, error }) {
    this.controlledValue = value;
  }

}
