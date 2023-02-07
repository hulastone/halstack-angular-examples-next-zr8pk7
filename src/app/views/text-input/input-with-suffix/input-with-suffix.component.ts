import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './input-with-suffix.component.html',
  styleUrls: ['./input-with-suffix.component.scss']
})
export class InputWithSuffixComponent implements OnInit {

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
