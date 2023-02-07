import { Component, OnInit } from '@angular/core';
import { FileData } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-root',
  templateUrl: './file-input-modes.component.html',
  styleUrls: ['./file-input-modes.component.scss'],
})
export class FileInputModesComponent implements OnInit {
  files: Array<FileData> = [];

  constructor() {}

  ngOnInit(): void {}

  onFileInput(event) {
    this.files = event;
    console.log(event);
  }
}
