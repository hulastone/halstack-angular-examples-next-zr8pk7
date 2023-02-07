import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledToggleGroupComponent } from './controlled-toggle-group.component';
import {
  DxcToggleGroupModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ControlledToggleGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcToggleGroupModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledToggleGroupComponent,
      },
    ]),
  ],
})
export class ControlledToggleGroupModule {}
