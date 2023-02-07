import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './spinner-with-overlay.component.html',
  styleUrls: ['./spinner-with-overlay.component.scss']
})
export class SpinnerWithOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVisible: boolean;

  showModal() {
    this.isVisible = true;
    this.fetchData().then(() => {
      this.isVisible = false;
    });
  }

  fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 3000);
    });
  };

}
