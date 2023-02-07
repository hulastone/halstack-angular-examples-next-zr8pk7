import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule, V3DxcTextareaModule } from '@dxc-technology/halstack-angular';
import { V3RequiredTextareaComponent } from './v3-required-textarea.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V3RequiredTextareaComponent,
  },
];
@NgModule({
  declarations: [V3RequiredTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcTextareaModule,
    RouterModule.forChild(routes),
  ], exports: [V3RequiredTextareaComponent]
})
export class V3RequiredTextareaModule { }
