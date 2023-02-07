import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './fill-parent-size-input.component.html',
  styleUrls: ['./fill-parent-size-input.component.scss']
})
export class FillParentSizeInputComponent implements OnInit {
  controlledValue = "";

  constructor() { }

  ngOnInit(): void {
  }

  onBlur({ value, error }) {
    this.controlledValue = value;
  }

  onChange({value, error }) {
    this.controlledValue = value;
  }

}
