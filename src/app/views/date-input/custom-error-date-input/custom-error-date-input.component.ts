import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './custom-error-date-input.component.html',
  styleUrls: ['./custom-error-date-input.component.scss']
})
export class CustomErrorDateInputComponent implements OnInit {

  value = "";
  errorMessage = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.value = event.value;
  }

  onBlur({ value, error }) {
    this.value = value;
    this.errorMessage = "Custom error provided in host component";
  }

}
