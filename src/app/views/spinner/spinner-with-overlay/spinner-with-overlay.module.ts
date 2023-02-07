import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerWithOverlayComponent } from './spinner-with-overlay.component';
import {
  DxcButtonModule,
  DxcSpinnerModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SpinnerWithOverlayComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSpinnerModule,
    DxcButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SpinnerWithOverlayComponent,
      },
    ]),
  ],
})
export class SpinnerWithOverlayModule {}
