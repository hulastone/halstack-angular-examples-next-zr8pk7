import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './pattern-constraint-password.component.html',
  styleUrls: ['./pattern-constraint-password.component.scss']
})
export class PatternConstraintPasswordComponent implements OnInit {

  value:string = '';

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
