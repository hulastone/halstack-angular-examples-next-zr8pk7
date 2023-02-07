import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './input-with-pattern-constraint.component.html',
  styleUrls: ['./input-with-pattern-constraint.component.scss']
})
export class InputWithPatternConstraintComponent implements OnInit {

  controlledValue = "";
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

  click() {
    console.log("Click");
  }
}
