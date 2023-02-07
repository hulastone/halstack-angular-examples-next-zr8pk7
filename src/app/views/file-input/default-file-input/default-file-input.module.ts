import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFileInputComponent } from './default-file-input.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultFileInputComponent,
  },
];


@NgModule({
  declarations: [DefaultFileInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcFileInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [DefaultFileInputComponent]
})
export class DefaultFileInputModule { }
