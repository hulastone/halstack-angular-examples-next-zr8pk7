import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallSpinnerComponent } from './small-spinner.component';
import {
  DxcSpinnerModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SmallSpinnerComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSpinnerModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: SmallSpinnerComponent,
      },
    ]),
  ],
})
export class SmallSpinnerModule {}
