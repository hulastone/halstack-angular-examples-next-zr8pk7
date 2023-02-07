import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './checkbox-label-position.component.html',
  styleUrls: ['./checkbox-label-position.component.scss']
})
export class CheckboxLabelPositionComponent implements OnInit {

  checked1: boolean;
  checked2: boolean;

  constructor() {}

  ngOnInit(): void {
    this.checked1 = true;
    this.checked2 = false;
  }

  onChange1(value) {
    this.checked1 = value;
    console.debug(value);
  }

  onChange2(value) {
    this.checked2 = value;
    console.debug(value);
  }

}
