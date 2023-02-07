import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledTextareaComponent } from './uncontrolled-textarea.component';
import {
  ThemeModule,
  DxcTextareaModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UncontrolledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: UncontrolledTextareaComponent,
      },
    ]),
  ],
})
export class UncontrolledTextareaModule {}
