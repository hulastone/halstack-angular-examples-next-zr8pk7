import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uncontrolled-input.component.html',
  styleUrls: ['./uncontrolled-input.component.scss']
})
export class UncontrolledInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    console.log(event);
  }

  onBlur(event) {
    console.log(event);
  }

}
