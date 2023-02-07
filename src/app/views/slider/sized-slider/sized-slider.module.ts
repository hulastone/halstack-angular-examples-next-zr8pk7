import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizedSliderComponent } from './sized-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SizedSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule,
    RouterModule.forChild([
      {
        path: '',
        component: SizedSliderComponent,
      },
    ]),
  ],
})
export class SizedSliderModule {}
