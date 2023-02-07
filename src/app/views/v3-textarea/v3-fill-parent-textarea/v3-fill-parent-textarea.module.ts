import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule, V3DxcTextareaModule } from '@dxc-technology/halstack-angular';
import { V3FillParentTextareaComponent } from './v3-fill-parent-textarea.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V3FillParentTextareaComponent,
  },
];
@NgModule({
  declarations: [V3FillParentTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcTextareaModule,
    RouterModule.forChild(routes),
  ], exports: [V3FillParentTextareaComponent]
})
export class V3FillParentTextareaModule { }
