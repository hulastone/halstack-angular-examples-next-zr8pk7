import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './disabled-number.component.html',
  styleUrls: ['./disabled-number.component.scss']
})
export class DisabledNumberComponent implements OnInit {
  value = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.value = event;
  }

  onBlur({ value, error }) {
    this.value = value;
  }
}
