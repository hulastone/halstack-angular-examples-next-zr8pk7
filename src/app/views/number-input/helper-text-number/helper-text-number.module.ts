import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperTextNumberComponent } from './helper-text-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HelperTextNumberComponent,
  },
];

@NgModule({
  declarations: [HelperTextNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ],exports: [HelperTextNumberComponent]
})
export class HelperTextNumberModule { }
