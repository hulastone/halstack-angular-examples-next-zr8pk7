import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './v3-uncontrolled-textarea.component.html',
  styleUrls: ['./v3-uncontrolled-textarea.component.scss']
})
export class V3UncontrolledTextareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    console.log(value);
  }

  onBlur(event) {
    console.log("textarea-default blur event");
  }
}
