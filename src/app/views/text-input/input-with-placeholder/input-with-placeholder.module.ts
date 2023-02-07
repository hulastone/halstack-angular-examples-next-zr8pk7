import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithPlaceholderComponent } from './input-with-placeholder.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputWithPlaceholderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputWithPlaceholderComponent,
      },
    ]),
  ],
})
export class InputWithPlaceholderModule {}
