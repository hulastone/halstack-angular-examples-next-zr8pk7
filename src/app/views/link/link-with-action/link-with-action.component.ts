import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './link-with-action.component.html',
  styleUrls: ['./link-with-action.component.scss']
})
export class LinkWithActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("Click on Link");
  }

}
