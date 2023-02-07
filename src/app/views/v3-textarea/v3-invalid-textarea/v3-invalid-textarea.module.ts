import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule, V3DxcTextareaModule } from '@dxc-technology/halstack-angular';
import { V3InvalidTextareaComponent } from './v3-invalid-textarea.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V3InvalidTextareaComponent,
  },
];

@NgModule({
  declarations: [V3InvalidTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcTextareaModule,
    RouterModule.forChild(routes),
  ], exports: [V3InvalidTextareaComponent]
})
export class V3InvalidTextareaModule { }
