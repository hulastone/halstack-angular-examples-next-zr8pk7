import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentSizeTextareaComponent } from './fill-parent-size-textarea.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FillParentSizeTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: FillParentSizeTextareaComponent,
      },
    ]),
  ],
})
export class FillParentSizeTextareaModule {}
