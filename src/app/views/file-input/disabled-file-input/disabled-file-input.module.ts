import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledFileInputComponent } from './disabled-file-input.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DisabledFileInputComponent,
  },
];
@NgModule({
  declarations: [DisabledFileInputComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],exports: [DisabledFileInputComponent]
})
export class DisabledFileInputModule { }
