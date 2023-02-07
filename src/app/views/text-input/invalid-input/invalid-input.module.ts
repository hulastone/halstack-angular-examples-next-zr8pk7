import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidInputComponent } from './invalid-input.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InvalidInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: InvalidInputComponent,
      },
    ]),
  ],
})
export class InvalidInputModule {}
