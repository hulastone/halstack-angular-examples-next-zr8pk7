import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule, V3DxcSelectModule } from '@dxc-technology/halstack-angular';
import { V3WithIconsSelectComponent } from './v3-with-icons-select.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V3WithIconsSelectComponent,
  },
];

@NgModule({
  declarations: [V3WithIconsSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcSelectModule,
    RouterModule.forChild(routes),
  ], exports: [V3WithIconsSelectComponent]
})
export class V3WithIconsSelectModule { }
