import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithLengthConstraintComponent } from './input-with-length-constraint.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputWithLengthConstraintComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputWithLengthConstraintComponent,
      },
    ]),
  ],
})
export class InputWithLengthConstraintModule {}
