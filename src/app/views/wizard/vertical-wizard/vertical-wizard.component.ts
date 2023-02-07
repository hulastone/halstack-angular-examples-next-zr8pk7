import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './vertical-wizard.component.html',
  styleUrls: ['./vertical-wizard.component.scss']
})
export class VerticalWizardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onStepClick(value) {
    console.log(value);
  }

}
