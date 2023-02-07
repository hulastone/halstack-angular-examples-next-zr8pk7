import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-accordion',
  templateUrl: './default-accordion.component.html',
  styleUrls: ['./default-accordion.component.scss']
})
export class DefaultAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  accordionClicked() {
    console.log("Default Accordion Clicked");
  }

}
