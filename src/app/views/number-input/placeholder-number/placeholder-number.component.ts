import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './placeholder-number.component.html',
  styleUrls: ['./placeholder-number.component.scss']
})
export class PlaceholderNumberComponent implements OnInit {

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
