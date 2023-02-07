import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './optional-input.component.html',
  styleUrls: ['./optional-input.component.scss']
})
export class OptionalInputComponent implements OnInit {

  controlledValue = "";

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
