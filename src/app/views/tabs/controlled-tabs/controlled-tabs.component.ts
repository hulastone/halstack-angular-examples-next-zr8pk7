import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-tabs.component.html',
  styleUrls: ['./controlled-tabs.component.scss']
})
export class ControlledTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeTabIndex: number;

  tabClicked(event) {
    this.activeTabIndex = event;
    console.log("this.activeTabIndex :", this.activeTabIndex);
  }
}
