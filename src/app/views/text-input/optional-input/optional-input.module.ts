import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalInputComponent } from './optional-input.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OptionalInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: OptionalInputComponent,
      },
    ]),
  ],
})
export class OptionalInputModule {}
