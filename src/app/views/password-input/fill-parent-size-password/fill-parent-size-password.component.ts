import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './fill-parent-size-password.component.html',
  styleUrls: ['./fill-parent-size-password.component.scss']
})
export class FillParentSizePasswordComponent implements OnInit {

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
