import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledInputComponent } from './disabled-input.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DisabledInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: DisabledInputComponent,
      },
    ]),
  ],
})
export class DisabledInputModule {}
