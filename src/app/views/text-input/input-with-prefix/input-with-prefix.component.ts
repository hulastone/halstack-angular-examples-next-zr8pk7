import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './input-with-prefix.component.html',
  styleUrls: ['./input-with-prefix.component.scss']
})
export class InputWithPrefixComponent implements OnInit {

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
