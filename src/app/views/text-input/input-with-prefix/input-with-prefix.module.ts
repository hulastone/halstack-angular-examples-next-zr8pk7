import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithPrefixComponent } from './input-with-prefix.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputWithPrefixComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputWithPrefixComponent,
      },
    ]),
  ],
})
export class InputWithPrefixModule {}
