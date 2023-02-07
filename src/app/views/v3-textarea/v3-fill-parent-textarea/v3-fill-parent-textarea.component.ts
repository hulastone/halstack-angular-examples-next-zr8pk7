import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-fill-parent-textarea.component.html',
  styleUrls: ['./v3-fill-parent-textarea.component.scss']
})
export class V3FillParentTextareaComponent implements OnInit {

  inputValue: string;

  constructor() {}

  ngOnInit(): void {
  }
  onChange(value: string) {
    this.inputValue = value;
  }

}
