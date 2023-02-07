import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './textarea-with-custom-error.component.html',
  styleUrls: ['./textarea-with-custom-error.component.scss']
})
export class TextareaWithCustomErrorComponent implements OnInit {

  value = "";
  length = { min: 5, max: 10 };
  errorMessage = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChange({ value, error }) {
    this.value = value;
  }

  onBlur({ value, error }) {
    this.value = value;
    error ? (this.errorMessage = "Custom error") : (this.errorMessage = null);
  }

}
