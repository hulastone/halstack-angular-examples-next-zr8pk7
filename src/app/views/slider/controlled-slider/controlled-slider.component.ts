import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-slider.component.html',
  styleUrls: ['./controlled-slider.component.scss']
})
export class ControlledSliderComponent implements OnInit {

  inputValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.inputValue = value;
    console.log(value);
  }
}
