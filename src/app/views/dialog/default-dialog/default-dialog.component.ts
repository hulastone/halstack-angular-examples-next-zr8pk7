import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './default-dialog.component.html',
  styleUrls: ['./default-dialog.component.scss']
})
export class DefaultDialogComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    this.visible = !this.visible;
  }
}
