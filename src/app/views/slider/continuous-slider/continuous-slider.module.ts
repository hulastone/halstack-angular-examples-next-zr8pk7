import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinuousSliderComponent } from './continuous-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContinuousSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContinuousSliderComponent,
      },
    ]),
  ],
})
export class ContinuousSliderModule {}
