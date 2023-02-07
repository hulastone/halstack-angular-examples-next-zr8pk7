import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledSliderComponent } from './controlled-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ControlledSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledSliderComponent,
      },
    ]),
  ],
})
export class ControlledSliderModule {}
