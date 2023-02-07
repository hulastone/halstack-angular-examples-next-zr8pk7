import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidTextareaComponent } from './invalid-textarea.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InvalidTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: InvalidTextareaComponent,
      },
    ]),
  ],
})
export class InvalidTextareaModule {}
