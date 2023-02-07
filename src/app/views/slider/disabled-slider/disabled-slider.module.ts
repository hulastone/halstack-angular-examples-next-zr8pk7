import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledSliderComponent } from './disabled-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';
import { ControlledSliderComponent } from '../controlled-slider/controlled-slider.component';

@NgModule({
  declarations: [DisabledSliderComponent],
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
export class DisabledSliderModule {}
