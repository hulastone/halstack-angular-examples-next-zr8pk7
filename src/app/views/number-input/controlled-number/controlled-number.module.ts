import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledNumberComponent } from './controlled-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ControlledNumberComponent,
  },
];


@NgModule({
  declarations: [ControlledNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ], exports: [ControlledNumberComponent]
})
export class ControlledNumberModule { }
