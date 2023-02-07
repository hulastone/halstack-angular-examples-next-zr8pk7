import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledTextareaComponent } from './controlled-textarea.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ControlledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledTextareaComponent,
      },
    ]),
  ],
})
export class ControlledTextareaModule {}
