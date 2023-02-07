import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-password.component.html',
  styleUrls: ['./controlled-password.component.scss']
})
export class ControlledPasswordComponent implements OnInit {

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
