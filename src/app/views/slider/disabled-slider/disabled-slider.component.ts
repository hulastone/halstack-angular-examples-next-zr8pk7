import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './disabled-slider.component.html',
  styleUrls: ['./disabled-slider.component.scss']
})
export class DisabledSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value){
    console.log(value);
  }

}
