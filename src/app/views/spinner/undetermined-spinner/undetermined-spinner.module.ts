import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndeterminedSpinnerComponent } from './undetermined-spinner.component';
import {
  DxcSpinnerModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UndeterminedSpinnerComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: UndeterminedSpinnerComponent,
      },
    ]),
  ],
})
export class UndeterminedSpinnerModule {}
