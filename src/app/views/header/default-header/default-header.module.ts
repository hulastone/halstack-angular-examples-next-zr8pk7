import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHeaderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { DefaultHeaderComponent } from './default-header.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultHeaderComponent,
  },
];
@NgModule({
  declarations: [DefaultHeaderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcHeaderModule,
    RouterModule.forChild(routes),
  ],exports: [DefaultHeaderComponent]
})
export class DefaultHeaderModule { }
