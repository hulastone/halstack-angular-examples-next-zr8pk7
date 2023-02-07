import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcDialogModule, ThemeModule, DxcButtonModule } from '@dxc-technology/halstack-angular';
import { DefaultDialogComponent } from './default-dialog.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultDialogComponent,
  },
];

@NgModule({
  declarations: [DefaultDialogComponent],
  imports: [
    CommonModule,
    DxcDialogModule,
    DxcButtonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [DefaultDialogComponent]
})
export class DefaultDialogModule { }
