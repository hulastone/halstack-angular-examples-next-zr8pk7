import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaVertialgrowNoneComponent } from './textarea-vertialgrow-none.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TextareaVertialgrowNoneComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: TextareaVertialgrowNoneComponent,
      },
    ]),
  ],
})
export class TextareaVertialgrowNoneModule {}
