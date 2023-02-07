import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sized-tag.component.html',
  styleUrls: ['./sized-tag.component.scss']
})
export class SizedTagComponent implements OnInit {

  dxcLogoPath: string;

  constructor() { }

  ngOnInit(): void {
    this.dxcLogoPath = "./assets/img/dxc-logo.svg";

  }

  onClick() {
    console.log("click");
  }

}
