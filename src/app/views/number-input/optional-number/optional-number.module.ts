import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { OptionalNumberComponent } from './optional-number.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OptionalNumberComponent,
  },
];
@NgModule({
  declarations: [OptionalNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ],exports: [OptionalNumberComponent]
})
export class OptionalNumberModule { }
