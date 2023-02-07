import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalTextareaComponent } from './optional-textarea.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OptionalTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: OptionalTextareaComponent,
      },
    ]),
  ],
})
export class OptionalTextareaModule {}
