import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputWithErrorComponent } from './file-input-with-error.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FileInputWithErrorComponent,
  },
];
@NgModule({
  declarations: [FileInputWithErrorComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcFileInputModule,
    RouterModule.forChild(routes),

  ], exports: [FileInputWithErrorComponent]
})
export class FileInputWithErrorModule { }
