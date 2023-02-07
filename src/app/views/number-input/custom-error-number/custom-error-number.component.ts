import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './custom-error-number.component.html',
  styleUrls: ['./custom-error-number.component.scss'],
})
export class CustomErrorNumberComponent implements OnInit {
  value = "";
  errorMessage = "";

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    this.value = event;
  }

  onBlur({ value, error }) {
    this.value = value;
    this.errorMessage = error ? "Custom error" : null;
  }
}
