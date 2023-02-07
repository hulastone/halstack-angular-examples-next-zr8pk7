import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-number.component.html',
  styleUrls: ['./controlled-number.component.scss'],
})
export class ControlledNumberComponent implements OnInit {
  value: string = '';

  constructor() {}

  ngOnInit(): void {}

  onChange({ value, error }) {
    this.value = value;
  }

  onBlur({ value, error }) {
    this.value = value;
  }
}
