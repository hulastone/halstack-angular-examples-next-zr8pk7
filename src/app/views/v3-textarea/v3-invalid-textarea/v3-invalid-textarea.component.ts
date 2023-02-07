import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-invalid-textarea.component.html',
  styleUrls: ['./v3-invalid-textarea.component.scss']
})
export class V3InvalidTextareaComponent implements OnInit {

  inputValue: string;

  constructor() {}

  ngOnInit(): void {
  }
  onChange(value: string) {
    this.inputValue = value;
  }

}
