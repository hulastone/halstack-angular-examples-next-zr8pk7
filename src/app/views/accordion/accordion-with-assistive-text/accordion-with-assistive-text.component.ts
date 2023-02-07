import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-with-assistive-text',
  templateUrl: './accordion-with-assistive-text.component.html',
  styleUrls: ['./accordion-with-assistive-text.component.scss']
})
export class AccordionWithAssistiveTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  accordionClicked() {
    console.log("Accordion with assistive text Clicked");
  }

}
