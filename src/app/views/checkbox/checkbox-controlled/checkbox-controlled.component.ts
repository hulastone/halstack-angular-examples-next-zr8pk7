import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './checkbox-controlled.component.html',
  styleUrls: ['./checkbox-controlled.component.scss']
})
export class CheckboxControlledComponent implements OnInit {

  checked: boolean;

  constructor() {}

  ngOnInit(): void {
    this.checked = false;
  }

  onChange(value) {
    this.checked = value;
    console.log("this.checked:", this.checked);
  }

}
