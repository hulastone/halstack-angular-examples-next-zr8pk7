import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderWithInputComponent } from './slider-with-input.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SliderWithInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule,
    RouterModule.forChild([
      {
        path: '',
        component: SliderWithInputComponent,
      },
    ]),
  ],
})
export class SliderWithInputModule {}
