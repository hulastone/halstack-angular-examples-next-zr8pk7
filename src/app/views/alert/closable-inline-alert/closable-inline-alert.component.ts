import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closable-inline-alert',
  templateUrl: './closable-inline-alert.component.html',
  styleUrls: ['./closable-inline-alert.component.scss']
})
export class ClosableInlineAlertComponent implements OnInit {
  isVisible: boolean = true;
  constructor() {
  }

  ngOnInit(): void {
  }
  handleVisibility() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
}
