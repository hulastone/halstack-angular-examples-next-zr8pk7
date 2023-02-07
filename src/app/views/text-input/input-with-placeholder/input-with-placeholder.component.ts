import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './input-with-placeholder.component.html',
  styleUrls: ['./input-with-placeholder.component.scss']
})
export class InputWithPlaceholderComponent implements OnInit {

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
