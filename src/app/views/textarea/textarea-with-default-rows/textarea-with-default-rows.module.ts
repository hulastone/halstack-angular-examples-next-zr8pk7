import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithDefaultRowsComponent } from './textarea-with-default-rows.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TextareaWithDefaultRowsComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: TextareaWithDefaultRowsComponent,
      },
    ]),
  ],
})
export class TextareaWithDefaultRowsModule {}
