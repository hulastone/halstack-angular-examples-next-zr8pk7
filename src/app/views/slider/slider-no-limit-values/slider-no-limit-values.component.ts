import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './slider-no-limit-values.component.html',
  styleUrls: ['./slider-no-limit-values.component.scss']
})
export class SliderNoLimitValuesComponent implements OnInit {

  inputValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.inputValue = value;
    console.log(value);
  }

}
