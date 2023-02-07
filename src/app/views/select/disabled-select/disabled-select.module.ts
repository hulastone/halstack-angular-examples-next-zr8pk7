import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { DisabledSelectComponent } from './disabled-select.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DisabledSelectComponent,
  },
];

@NgModule({
  declarations: [DisabledSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule,
    RouterModule.forChild(routes),
  ], exports: [DisabledSelectComponent]
})
export class DisabledSelectModule { }
