import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sized-date.component.html',
  styleUrls: ['./sized-date.component.scss']
})
export class SizedDateComponent implements OnInit {

  invalid: boolean;
  value: Date;

  constructor() {}

  ngOnInit(): void {
    this.invalid = false;
  }

  onChange(event) {
    console.log(event);
    this.value =
      event.stringValue !== null && event.stringValue !== undefined
        ? event.stringValue
        : null;
    this.invalid =
      event.stringValue === null || event.stringValue === undefined
        ? true
        : false;
  }

}
