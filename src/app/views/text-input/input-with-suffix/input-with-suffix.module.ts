import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithSuffixComponent } from './input-with-suffix.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputWithSuffixComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputWithSuffixComponent,
      },
    ]),
  ],
})
export class InputWithSuffixModule {}
