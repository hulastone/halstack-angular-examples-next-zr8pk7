import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './tabs-with-content.component.html',
  styleUrls: ['./tabs-with-content.component.scss']
})
export class TabsWithContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tabClicked(event) {
    console.log(event);
  }

}
