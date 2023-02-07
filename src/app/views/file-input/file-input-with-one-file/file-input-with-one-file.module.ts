import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputWithOneFileComponent } from './file-input-with-one-file.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FileInputWithOneFileComponent,
  },
];
@NgModule({
  declarations: [FileInputWithOneFileComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports: [FileInputWithOneFileComponent]
})
export class FileInputWithOneFileModule { }
