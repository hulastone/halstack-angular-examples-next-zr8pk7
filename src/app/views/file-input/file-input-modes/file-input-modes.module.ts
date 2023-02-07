import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { FileInputModesComponent } from './file-input-modes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FileInputModesComponent,
  },
];
@NgModule({
  declarations: [FileInputModesComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports: [FileInputModesComponent]
})
export class FileInputModesModule { }
