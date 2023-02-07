import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uncontrolled-switch.component.html',
  styleUrls: ['./uncontrolled-switch.component.scss']
})
export class UncontrolledSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }
}
