import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './input-with-helper-text.component.html',
  styleUrls: ['./input-with-helper-text.component.scss']
})
export class InputWithHelperTextComponent implements OnInit {
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

}
