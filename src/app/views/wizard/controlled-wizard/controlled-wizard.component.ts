import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-wizard.component.html',
  styleUrls: ['./controlled-wizard.component.scss']
})
export class ControlledWizardComponent implements OnInit {

  currentStep: number;

  constructor() {
    this.currentStep = 1;
  }

  ngOnInit(): void {

  }

  onStepClick(value) {
    this.currentStep = value;
    console.log(value);
  }

}
