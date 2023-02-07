import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uncontrolled-tabs.component.html',
  styleUrls: ['./uncontrolled-tabs.component.scss']
})
export class UncontrolledTabsComponent implements OnInit {

  activeTabIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
  }


  tabClicked(event) {
    console.log(event);
  }

}
