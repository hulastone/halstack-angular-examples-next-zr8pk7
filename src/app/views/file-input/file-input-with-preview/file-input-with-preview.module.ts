import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputWithPreviewComponent } from './file-input-with-preview.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FileInputWithPreviewComponent,
  },
];
@NgModule({
  declarations: [FileInputWithPreviewComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],exports: [FileInputWithPreviewComponent]
})
export class FileInputWithPreviewModule { }
