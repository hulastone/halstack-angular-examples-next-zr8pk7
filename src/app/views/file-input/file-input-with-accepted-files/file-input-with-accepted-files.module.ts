import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputWithAcceptedFilesComponent } from './file-input-with-accepted-files.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FileInputWithAcceptedFilesComponent,
  },
];
@NgModule({
  declarations: [FileInputWithAcceptedFilesComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [FileInputWithAcceptedFilesComponent]
})
export class FileInputWithAcceptedFilesModule { }
