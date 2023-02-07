import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './textarea-with-length-constraint.component.html',
  styleUrls: ['./textarea-with-length-constraint.component.scss']
})
export class TextareaWithLengthConstraintComponent implements OnInit {

  length = { min: 5, max: 10 };
  value = "";

  constructor() {}

  ngOnInit(): void {
  }

  onChange({ value, error }) {
    this.value = value;
  }

  onBlur({ value, error }) {
    this.value = value;
  }

}
