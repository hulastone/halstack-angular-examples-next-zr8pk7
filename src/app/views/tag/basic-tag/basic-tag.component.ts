import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './basic-tag.component.html',
  styleUrls: ['./basic-tag.component.scss']
})
export class BasicTagComponent implements OnInit {

  dxcLogoPath: string;

  constructor() { }

  ngOnInit(): void {
    this.dxcLogoPath = "./assets/img/dxc-logo.svg";
  }

}
