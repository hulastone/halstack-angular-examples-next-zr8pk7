import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderNoLimitValuesComponent } from './slider-no-limit-values.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SliderNoLimitValuesComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule,
    RouterModule.forChild([
      {
        path: '',
        component: SliderNoLimitValuesComponent,
      },
    ]),
  ],
})
export class SliderNoLimitValuesModule {}
