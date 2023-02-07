import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3MultipleSelectComponent } from './v3-multiple-select.component';
import { ThemeModule, V3DxcSelectModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V3MultipleSelectComponent,
  },
];

@NgModule({
  declarations: [V3MultipleSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcSelectModule,
    RouterModule.forChild(routes),
  ], exports: [V3MultipleSelectComponent]
})
export class V3MultipleSelectModule { }
