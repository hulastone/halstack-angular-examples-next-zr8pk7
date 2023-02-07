import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinMaxStepNumberComponent } from './min-max-step-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MinMaxStepNumberComponent,
  },
];
@NgModule({
  declarations: [MinMaxStepNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [MinMaxStepNumberComponent]
})
export class MinMaxStepNumberModule { }
