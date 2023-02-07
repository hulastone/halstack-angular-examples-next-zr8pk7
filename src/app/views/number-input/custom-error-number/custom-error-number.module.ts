import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { CustomErrorNumberComponent } from './custom-error-number.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomErrorNumberComponent,
  },
];


@NgModule({
  declarations: [CustomErrorNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ], exports: [CustomErrorNumberComponent]
})
export class CustomErrorNumberModule { }
