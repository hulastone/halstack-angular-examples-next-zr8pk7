import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-with-icon',
  templateUrl: './accordion-with-icon.component.html',
  styleUrls: ['./accordion-with-icon.component.scss']
})
export class AccordionWithIconComponent implements OnInit {
  homeLogo = "assets/img/home.svg";
  constructor() { }

  ngOnInit(): void {
  }
  accordionClicked() {
    console.log("Accordion with icon clicked");
  }
}
