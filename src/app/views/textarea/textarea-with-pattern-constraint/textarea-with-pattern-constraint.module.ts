import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithPatternConstraintComponent } from './textarea-with-pattern-constraint.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TextareaWithPatternConstraintComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: TextareaWithPatternConstraintComponent,
      },
    ]),
  ],
})
export class TextareaWithPatternConstraintModule {}
