import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledTextareaComponent } from './disabled-textarea.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DisabledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: DisabledTextareaComponent,
      },
    ]),
  ],
})
export class DisabledTextareaModule {}
