import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './radio-label-position.component.html',
  styleUrls: ['./radio-label-position.component.scss']
})
export class RadioLabelPositionComponent implements OnInit {

  checked1: boolean;
  checked2: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onChange1() {
    this.checked1 = !this.checked1;
  }
  onChange2() {
    this.checked2 = !this.checked2;
  }

}
