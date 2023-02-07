import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './tag-with-link.component.html',
  styleUrls: ['./tag-with-link.component.scss']
})
export class TagWithLinkComponent implements OnInit {
  dxcLogoPath: string;

  constructor() { }

  ngOnInit(): void {
    this.dxcLogoPath = "./assets/img/dxc-logo.svg";

  }



}
