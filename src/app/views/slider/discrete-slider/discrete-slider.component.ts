import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './discrete-slider.component.html',
  styleUrls: ['./discrete-slider.component.scss']
})
export class DiscreteSliderComponent implements OnInit {

  inputValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.inputValue = value;
    console.log(value);
  }

}
