import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscreteSliderComponent } from './discrete-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DiscreteSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule,
    RouterModule.forChild([
      {
        path: '',
        component: DiscreteSliderComponent,
      },
    ]),
  ],
})
export class DiscreteSliderModule {}
