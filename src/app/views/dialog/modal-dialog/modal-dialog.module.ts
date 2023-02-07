import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcButtonModule, DxcDialogModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { ModalDialogComponent } from './modal-dialog.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ModalDialogComponent,
  },
];
@NgModule({
  declarations: [ModalDialogComponent],
  imports: [
    CommonModule,
    DxcButtonModule,
    DxcDialogModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports: [ModalDialogComponent]
})
export class ModalDialogModule { }
