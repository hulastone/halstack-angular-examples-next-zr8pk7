import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uncontrolled-textarea.component.html',
  styleUrls: ['./uncontrolled-textarea.component.scss']
})
export class UncontrolledTextareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    console.log(event);
  }
}
