import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './preffix-number.component.html',
  styleUrls: ['./preffix-number.component.scss']
})
export class PreffixNumberComponent implements OnInit {


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
