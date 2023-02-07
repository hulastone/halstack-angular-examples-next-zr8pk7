import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

  constructor() { }

  visible = false;

  ngOnInit(): void {

  }

  openDialog() {
    this.visible = !this.visible;
  }

}
