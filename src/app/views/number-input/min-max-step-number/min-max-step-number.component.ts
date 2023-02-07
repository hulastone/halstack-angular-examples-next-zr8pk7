import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './min-max-step-number.component.html',
  styleUrls: ['./min-max-step-number.component.scss']
})
export class MinMaxStepNumberComponent implements OnInit {
  value = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.value = event;
  }

  onBlur({ value, error }) {
    this.value = value;
  }

}
