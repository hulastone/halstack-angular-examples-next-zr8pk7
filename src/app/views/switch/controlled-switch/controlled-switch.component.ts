import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-switch.component.html',
  styleUrls: ['./controlled-switch.component.scss']
})
export class ControlledSwitchComponent implements OnInit {

  checked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.checked = value;
    console.log(value);
  }

}
