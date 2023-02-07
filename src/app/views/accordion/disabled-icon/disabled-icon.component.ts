import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disabled-icon',
  templateUrl: './disabled-icon.component.html',
  styleUrls: ['./disabled-icon.component.scss']
})
export class DisabledIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  accordionClicked() {
    console.log("Disabled Accordion Clicked");
  }

}
