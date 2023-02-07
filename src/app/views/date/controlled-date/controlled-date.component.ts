import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-date.component.html',
  styleUrls: ['./controlled-date.component.scss']
})
export class ControlledDateComponent implements OnInit {

  isInvalidDate: boolean = false;
  inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.inputValue = event.stringValue;
    console.log("change: " + JSON.stringify(event));
    this.checkDate(event.dateValue);
  }

  checkDate(dateValue: Date) {
    this.isInvalidDate = dateValue ? false : true;
  }

}
