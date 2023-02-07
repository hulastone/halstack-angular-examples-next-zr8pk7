import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './textarea-with-pattern-constraint.component.html',
  styleUrls: ['./textarea-with-pattern-constraint.component.scss']
})
export class TextareaWithPatternConstraintComponent implements OnInit {

  value = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChange({ value, error }) {
    this.value = value;
  }

  onBlur({ value, error }) {
    this.value = value;
  }

}
