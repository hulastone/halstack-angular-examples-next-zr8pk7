import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sized-slider.component.html',
  styleUrls: ['./sized-slider.component.scss']
})
export class SizedSliderComponent implements OnInit {

  value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.value = value;
    console.log(value);
  }
}
