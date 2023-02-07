import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcButtonModule, DxcDialogModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { CloseDialogComponent } from './close-dialog.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CloseDialogComponent,
  },
];

@NgModule({
  declarations: [CloseDialogComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDialogModule,
    DxcButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [CloseDialogComponent]
})
export class CloseDialogModule { }
