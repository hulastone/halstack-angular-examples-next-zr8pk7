import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlled-accordion',
  templateUrl: './controlled-accordion.component.html',
  styleUrls: ['./controlled-accordion.component.scss']
})
export class ControlledAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.isExpanded = true;

  }

  isExpanded: boolean;

  accordionClicked(event) {
    this.isExpanded = event;
    console.log(event);
  }
}
