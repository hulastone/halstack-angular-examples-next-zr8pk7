import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './tag-with-icon.component.html',
  styleUrls: ['./tag-with-icon.component.scss']
})
export class TagWithIconComponent implements OnInit {
  dxcLogoPath: string;

  constructor() { }

  ngOnInit(): void {
    this.dxcLogoPath = "./assets/img/dxc-logo.svg";

  }

  onClick() {
    console.log("click");
  }
}
