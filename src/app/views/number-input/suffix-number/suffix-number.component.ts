import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './suffix-number.component.html',
  styleUrls: ['./suffix-number.component.scss']
})
export class SuffixNumberComponent implements OnInit {

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
