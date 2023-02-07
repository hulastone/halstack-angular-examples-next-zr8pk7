import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3ControlledSelectComponent } from './v3-controlled-select.component';
import { ThemeModule, V3DxcSelectModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V3ControlledSelectComponent,
  },
];
@NgModule({
  declarations: [V3ControlledSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcSelectModule,
    RouterModule.forChild(routes),
  ],exports: [V3ControlledSelectComponent]
})
export class V3ControlledSelectModule { }
