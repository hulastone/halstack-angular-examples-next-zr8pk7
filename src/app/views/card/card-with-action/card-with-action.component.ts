import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-with-action',
  templateUrl: './card-with-action.component.html',
  styleUrls: ['./card-with-action.component.scss']
})
export class CardWithActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    console.log("click");
  }

}
