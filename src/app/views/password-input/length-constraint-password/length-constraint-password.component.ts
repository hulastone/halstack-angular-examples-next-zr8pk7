import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './length-constraint-password.component.html',
  styleUrls: ['./length-constraint-password.component.scss']
})
export class LengthConstraintPasswordComponent implements OnInit {

  value = "";
  length = { min: 5, max: 10 };

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
