import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './invalid-input.component.html',
  styleUrls: ['./invalid-input.component.scss']
})
export class InvalidInputComponent implements OnInit {

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
