import { Component, OnInit } from '@angular/core';
import { FileData } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-root',
  templateUrl: './file-input-with-one-file.component.html',
  styleUrls: ['./file-input-with-one-file.component.scss'],
})
export class FileInputWithOneFileComponent implements OnInit {
  files: Array<FileData> = [];
  constructor() {}

  ngOnInit(): void {}

  onFileInput(event) {
    this.files = event;
    console.log(event);
  }
}
