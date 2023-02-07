import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './radio-sized.component.html',
  styleUrls: ['./radio-sized.component.scss']
})
export class RadioSizedComponent implements OnInit {

  checked1 = false;

  constructor() { }

  ngOnInit(): void {
  }


  onChange() {
    this.checked1 = !this.checked1;
  }

}
