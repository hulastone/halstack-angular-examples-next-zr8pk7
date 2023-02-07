import { Component, OnInit } from '@angular/core';
import { FileData } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-root',
  templateUrl: './file-input-with-accepted-files.component.html',
  styleUrls: ['./file-input-with-accepted-files.component.scss'],
})
export class FileInputWithAcceptedFilesComponent implements OnInit {
  files: Array<FileData> = [];

  constructor() {}

  ngOnInit(): void {}

  onFileInput(event) {
    this.files = event;
    console.log(event);
  }
}
