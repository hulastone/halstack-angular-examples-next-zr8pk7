import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledInputTextComponent } from './controlled-input-text.component';
import {
  DxcInputTextModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ControlledInputTextComponent,
  },
];

@NgModule({
  declarations: [ControlledInputTextComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcInputTextModule,
    RouterModule.forChild(routes),
  ],
  exports: [ControlledInputTextComponent],
})
export class ControlledInputTextModule {}
