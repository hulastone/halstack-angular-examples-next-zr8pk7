import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-date-input.component.html',
  styleUrls: ['./controlled-date-input.component.scss']
})
export class ControlledDateInputComponent implements OnInit {
  value = "";

  constructor() { }

  ngOnInit(): void {
  }
  onChange(event) {
    this.value = event.value;
  }

  onBlur({ value, error }) {
    this.value = value;
  }
}
