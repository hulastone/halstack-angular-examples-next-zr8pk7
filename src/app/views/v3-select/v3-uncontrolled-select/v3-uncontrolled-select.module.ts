import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3UncontrolledSelectComponent } from './v3-uncontrolled-select.component';
import { ThemeModule, V3DxcSelectModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V3UncontrolledSelectComponent,
  },
];

@NgModule({
  declarations: [V3UncontrolledSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes),
    V3DxcSelectModule
  ], exports: [V3UncontrolledSelectComponent]
})
export class V3UncontrolledSelectModule { }
