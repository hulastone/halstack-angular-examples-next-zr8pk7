import { NgModule } from '@angular/core';
import { ProgressBarWithOverlayComponent } from './progress-bar-with-overlay.component';
import {
  DxcButtonModule,
  DxcProgressbarModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProgressBarWithOverlayComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcProgressbarModule,
    DxcButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProgressBarWithOverlayComponent,
      },
    ]),
  ],
})
export class ProgressBarWithOverlayModule {}
