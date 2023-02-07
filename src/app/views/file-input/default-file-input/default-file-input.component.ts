import { Component, OnInit } from '@angular/core';
import { FileData } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-root',
  templateUrl: './default-file-input.component.html',
  styleUrls: ['./default-file-input.component.scss'],
})
export class DefaultFileInputComponent implements OnInit {
  files: Array<FileData> = [];

  constructor() {}

  ngOnInit(): void {}

  onFileInput(event) {
    this.files = event;
    console.log(event);
  }
}
