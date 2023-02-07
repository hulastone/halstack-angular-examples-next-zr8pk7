import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3ControlledTextareaComponent } from './v3-controlled-textarea.component';
import { ThemeModule, V3DxcTextareaModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V3ControlledTextareaComponent,
  },
];
@NgModule({
  declarations: [V3ControlledTextareaComponent],
  imports: [
    ThemeModule,
    V3DxcTextareaModule,
    RouterModule.forChild(routes),
  ], exports: [V3ControlledTextareaComponent]
})
export class V3ControlledTextareaModule { }
