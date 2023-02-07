import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledToggleGroupComponent } from './disabled-toggle-group.component';
import {
  DxcToggleGroupModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DisabledToggleGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcToggleGroupModule,
    RouterModule.forChild([
      {
        path: '',
        component: DisabledToggleGroupComponent,
      },
    ]),
  ],
})
export class DisabledToggleGroupModule {}
