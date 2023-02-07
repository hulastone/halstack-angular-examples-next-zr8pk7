import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule, V3DxcTextareaModule } from '@dxc-technology/halstack-angular';
import { V3UncontrolledTextareaComponent } from './v3-uncontrolled-textarea.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V3UncontrolledTextareaComponent,
  },
];

@NgModule({
  declarations: [V3UncontrolledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcTextareaModule,
    RouterModule.forChild(routes),
  ], exports: [V3UncontrolledTextareaComponent]
})
export class V3UncontrolledTextareaModule { }
