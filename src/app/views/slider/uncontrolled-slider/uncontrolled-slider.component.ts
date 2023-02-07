import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uncontrolled-slider.component.html',
  styleUrls: ['./uncontrolled-slider.component.scss']
})
export class UncontrolledSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }

  formatLabel(value: number) {
    return `${value}$`;
  }

}
