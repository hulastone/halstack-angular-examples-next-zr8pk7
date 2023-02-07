import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaVertialgrowManualComponent } from './textarea-vertialgrow-manual.component';
import {
  DxcTextareaModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TextareaVertialgrowManualComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule,
    RouterModule.forChild([
      {
        path: '',
        component: TextareaVertialgrowManualComponent,
      },
    ]),
  ],
})
export class TextareaVertialgrowManualModule {}
