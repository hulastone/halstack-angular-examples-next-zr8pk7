import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithHelperTextComponent } from './textarea-with-helper-text.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TextareaWithHelperTextComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: TextareaWithHelperTextComponent,
      },
    ]),
  ],
})
export class TextareaWithHelperTextModule {}
