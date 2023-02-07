import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './button-modes.component.html',
  styleUrls: ['./button-modes.component.scss']
})
export class ButtonModesComponent implements OnInit {

  constructor() {

    console.log('ButtonModesComponent');
  }

  ngOnInit(): void {
  }

  onClick = (event) => {
    console.log(event);
  }
}
