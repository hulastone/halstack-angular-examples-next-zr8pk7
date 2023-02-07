import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithPatternConstraintComponent } from './input-with-pattern-constraint.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputWithPatternConstraintComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputWithPatternConstraintComponent,
      },
    ]),
  ],
})
export class InputWithPatternConstraintModule {}
