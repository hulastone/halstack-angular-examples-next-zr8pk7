import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './continuous-slider.component.html',
  styleUrls: ['./continuous-slider.component.scss']
})
export class ContinuousSliderComponent implements OnInit {

  inputValue: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.inputValue = value;
    console.log(value);
  }

}
