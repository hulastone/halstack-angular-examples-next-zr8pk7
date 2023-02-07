import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './input-with-length-constraint.component.html',
  styleUrls: ['./input-with-length-constraint.component.scss']
})
export class InputWithLengthConstraintComponent implements OnInit {

  controlledValue = "";
  length = { min: 5, max: 10 };
  error = "";

  constructor() {}

  ngOnInit(): void {
  }

  onBlur({ value, error }) {
    this.controlledValue = value;
    this.error = error;
  }

  onChange({ value, error }) {
    this.controlledValue = value;
    this.error = error;
  }

}
