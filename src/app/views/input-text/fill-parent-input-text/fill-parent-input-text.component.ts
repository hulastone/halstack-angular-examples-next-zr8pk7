import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './fill-parent-input-text.component.html',
  styleUrls: ['./fill-parent-input-text.component.scss']
})
export class FillParentInputTextComponent implements OnInit {
  inputValue: string;
  constructor() { }

  ngOnInit(): void {
  }
  onChange(value: string) {
    this.inputValue = value;
  }
}
