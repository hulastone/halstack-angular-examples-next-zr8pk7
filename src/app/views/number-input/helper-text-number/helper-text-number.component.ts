import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './helper-text-number.component.html',
  styleUrls: ['./helper-text-number.component.scss']
})
export class HelperTextNumberComponent implements OnInit {

  value:string = '';
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
