import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uncontrolled-wizard.component.html',
  styleUrls: ['./uncontrolled-wizard.component.scss']
})
export class UncontrolledWizardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onStepClick(value) {
    console.log(value);
  }

}
