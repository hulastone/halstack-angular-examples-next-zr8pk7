import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './invalid-number.component.html',
  styleUrls: ['./invalid-number.component.scss']
})
export class InvalidNumberComponent implements OnInit {
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
