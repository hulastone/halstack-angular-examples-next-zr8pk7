import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-toggle-group.component.html',
  styleUrls: ['./controlled-toggle-group.component.scss'],
})
export class ControlledToggleGroupComponent implements OnInit {
  selected = 'test1';

  onChange($event) {
    this.selected = $event;
    console.log(this.selected);
  }
  constructor() {}

  ngOnInit(): void {}
}
