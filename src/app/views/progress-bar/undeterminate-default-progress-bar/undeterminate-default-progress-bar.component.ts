import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './undeterminate-default-progress-bar.component.html',
  styleUrls: ['./undeterminate-default-progress-bar.component.scss'],
})
export class UndeterminateDefaultProgressBarComponent implements OnInit {
  constructor() {}

  fileUploadComplete = false;
  handleComplete() {
    this.fileUploadComplete = !this.fileUploadComplete;
  }
  ngOnInit(): void {}
}
