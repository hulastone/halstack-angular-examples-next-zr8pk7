import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './masked-input-text.component.html',
  styleUrls: ['./masked-input-text.component.scss']
})
export class MaskedInputTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    console.log(value);
  }

  onBlur(event) {
    console.log("text-input blur event");
  }
}
