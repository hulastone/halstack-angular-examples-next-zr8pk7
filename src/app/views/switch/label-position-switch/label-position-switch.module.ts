import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelPositionSwitchComponent } from './label-position-switch.component';
import { DxcSwitchModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LabelPositionSwitchComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSwitchModule,
    RouterModule.forChild([
      {
        path: '',
        component: LabelPositionSwitchComponent,
      },
    ]),
  ],
})
export class LabelPositionSwitchModule {}
