import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './default-upload.component.html',
  styleUrls: ['./default-upload.component.scss'],
})
export class DefaultUploadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  async fileUpload(file) {
    const result = await new Promise((resolve) => setTimeout(resolve, 8000));
    return result;
  }
}
