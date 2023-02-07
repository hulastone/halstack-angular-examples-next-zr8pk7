import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header.component';
import { DxcButtonModule, DxcHeaderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomHeaderComponent,
  },
];
@NgModule({
  declarations: [CustomHeaderComponent],
  imports: [
    CommonModule,
    DxcHeaderModule,
    DxcButtonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports: [CustomHeaderComponent]
})
export class CustomHeaderModule { }
