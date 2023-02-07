import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledInputComponent } from './controlled-input.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ControlledInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledInputComponent,
      },
    ]),
  ],
})
export class ControlledInputModule {}
