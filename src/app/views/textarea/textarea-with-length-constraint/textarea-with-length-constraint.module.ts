import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithLengthConstraintComponent } from './textarea-with-length-constraint.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TextareaWithLengthConstraintComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: TextareaWithLengthConstraintComponent,
      },
    ]),
  ],
})
export class TextareaWithLengthConstraintModule {}
