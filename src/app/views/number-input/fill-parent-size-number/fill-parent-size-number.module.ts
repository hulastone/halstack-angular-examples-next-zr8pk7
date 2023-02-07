import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentSizeNumberComponent } from './fill-parent-size-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FillParentSizeNumberComponent,
  },
];

@NgModule({
  declarations: [FillParentSizeNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ],exports: [FillParentSizeNumberComponent]
})
export class FillParentSizeNumberModule { }
