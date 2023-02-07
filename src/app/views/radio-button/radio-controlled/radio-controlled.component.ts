import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './radio-controlled.component.html',
  styleUrls: ['./radio-controlled.component.scss']
})
export class RadioControlledComponent implements OnInit {

  checked:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.checked = value;
    console.info("Radio Simple checked event: " + value);
  }

}
