import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './fill-parent-size-number.component.html',
  styleUrls: ['./fill-parent-size-number.component.scss']
})
export class FillParentSizeNumberComponent implements OnInit {
  value = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.value = event;
  }

  onBlur({ value, error }) {
    this.value = value;
  }

}
