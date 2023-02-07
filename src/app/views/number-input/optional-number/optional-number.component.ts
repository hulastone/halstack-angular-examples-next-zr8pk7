import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './optional-number.component.html',
  styleUrls: ['./optional-number.component.scss']
})
export class OptionalNumberComponent implements OnInit {
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
