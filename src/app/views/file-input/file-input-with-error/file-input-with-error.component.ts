import { Component, OnInit } from '@angular/core';
import { FileData } from "@dxc-technology/halstack-angular";
@Component({
  selector: 'app-root',
  templateUrl: './file-input-with-error.component.html',
  styleUrls: ['./file-input-with-error.component.scss']
})
export class FileInputWithErrorComponent implements OnInit {
  value: Array<FileData> = [];
  constructor() { }

  ngOnInit(): void {
  }

  callbackFile(event) {
    const files = event.map((file) => {
      return {
        ...file,
        error: "there is a new error :)"
      };
    });
    this.value = files;
  }

}
