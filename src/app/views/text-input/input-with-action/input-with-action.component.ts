import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './input-with-action.component.html',
  styleUrls: ['./input-with-action.component.scss']
})
export class InputWithActionComponent implements OnInit {
  controlledValue = '';
  constructor() { }

  ngOnInit(): void {
  }

  onBlur({ value, error }) {
    this.controlledValue = value;
  }

  onChange({ value, error }) {
    this.controlledValue = value;
  }

  click() {
    console.log("Click");
  }

}
