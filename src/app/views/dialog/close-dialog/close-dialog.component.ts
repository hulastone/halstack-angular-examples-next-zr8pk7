import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './close-dialog.component.html',
  styleUrls: ['./close-dialog.component.scss']
})
export class CloseDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visible = false;

  openDialog() {
    this.visible = !this.visible;
  }

}
