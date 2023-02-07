import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledSwitchComponent } from './uncontrolled-switch.component';
import { DxcSwitchModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UncontrolledSwitchComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSwitchModule,
    RouterModule.forChild([
      {
        path: '',
        component: UncontrolledSwitchComponent,
      },
    ]),
  ],
})
export class UncontrolledSwitchModule {}
