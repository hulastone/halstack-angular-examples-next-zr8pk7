import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './progress-bar-with-overlay.component.html',
  styleUrls: ['./progress-bar-with-overlay.component.scss']
})
export class ProgressBarWithOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isVisible = false;

  showProgressbar() {
    this.isVisible = !this.isVisible;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }
}
