import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithHelperTextComponent } from './input-with-helper-text.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputWithHelperTextComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputWithHelperTextComponent,
      },
    ]),
  ],
})
export class InputWithHelperTextModule {}
