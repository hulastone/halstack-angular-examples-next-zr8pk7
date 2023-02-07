import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uncontrolled-number.component.html',
  styleUrls: ['./uncontrolled-number.component.scss']
})
export class UncontrolledNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onChange({ value, error }) {
    console.log(value);
  }

  onBlur({ value, error }) {
    console.log(value);
  }

}
