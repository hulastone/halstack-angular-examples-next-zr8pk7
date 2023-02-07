import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeterminedSpinnerComponent } from './determined-spinner.component';
import {
  DxcSpinnerModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DeterminedSpinnerComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSpinnerModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: DeterminedSpinnerComponent,
      },
    ]),
  ],
})
export class DeterminedSpinnerModule {}
