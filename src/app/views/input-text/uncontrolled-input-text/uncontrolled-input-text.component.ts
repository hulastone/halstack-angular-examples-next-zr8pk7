import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uncontrolled-input-text.component.html',
  styleUrls: ['./uncontrolled-input-text.component.scss']
})
export class UncontrolledInputTextComponent implements OnInit {

  inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    console.log(value);
  }

  onBlur(event) {
    console.log("text-input-default blur event");
  }

}
