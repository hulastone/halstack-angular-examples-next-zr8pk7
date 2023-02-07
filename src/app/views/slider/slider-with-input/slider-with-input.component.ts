import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './slider-with-input.component.html',
  styleUrls: ['./slider-with-input.component.scss'],
})
export class SliderWithInputComponent implements OnInit {
  value: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onChange(value) {
    this.value = value;
    console.log(value);
  }

  onDragEnd(value) {
    console.log('dragEnd: ' + value);
  }
}
