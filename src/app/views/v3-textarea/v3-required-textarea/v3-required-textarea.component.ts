import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-required-textarea.component.html',
  styleUrls: ['./v3-required-textarea.component.scss']
})
export class V3RequiredTextareaComponent implements OnInit {

  inputValue: string;

  constructor() {}

  ngOnInit(): void {
  }
  onChange(value: string) {
    this.inputValue = value;
  }

}
