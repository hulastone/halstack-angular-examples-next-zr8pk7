import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sized-input-text.component.html',
  styleUrls: ['./sized-input-text.component.scss']
})
export class SizedInputTextComponent implements OnInit {
  inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.inputValue = value;
  }
}
