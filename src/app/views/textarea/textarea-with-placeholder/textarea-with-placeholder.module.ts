import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithPlaceholderComponent } from './textarea-with-placeholder.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TextareaWithPlaceholderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: TextareaWithPlaceholderComponent,
      },
    ]),
  ],
})
export class TextareaWithPlaceholderModule {}
