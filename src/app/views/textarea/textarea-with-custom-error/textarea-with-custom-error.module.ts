import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithCustomErrorComponent } from './textarea-with-custom-error.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TextareaWithCustomErrorComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: TextareaWithCustomErrorComponent,
      },
    ]),
  ],
})
export class TextareaWithCustomErrorModule {}
