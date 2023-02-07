import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledSwitchComponent } from './controlled-switch.component';
import { DxcSwitchModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ControlledSwitchComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSwitchModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledSwitchComponent,
      },
    ]),
  ],
})
export class ControlledSwitchModule {}
