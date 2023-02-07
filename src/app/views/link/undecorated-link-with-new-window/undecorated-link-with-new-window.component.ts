import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './undecorated-link-with-new-window.component.html',
  styleUrls: ['./undecorated-link-with-new-window.component.scss']
})
export class UndecoratedLinkWithNewWindowComponent implements OnInit {

  underlined: boolean = true;
  newWindow: boolean = true;
  inheritColor: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
