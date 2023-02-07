import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './label-position-switch.component.html',
  styleUrls: ['./label-position-switch.component.scss']
})
export class LabelPositionSwitchComponent implements OnInit {

  checked1: boolean;
  checked2: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onChange1(value) {
    this.checked1 = value;
    console.log("change1:", this.checked1);
  }
  onChange2(value) {
    this.checked2 = value;
    console.log("change2:", this.checked2);
  }
}
