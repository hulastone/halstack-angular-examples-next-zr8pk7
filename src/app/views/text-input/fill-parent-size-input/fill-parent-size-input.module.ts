import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentSizeInputComponent } from './fill-parent-size-input.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FillParentSizeInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: FillParentSizeInputComponent,
      },
    ]),
  ],
})
export class FillParentSizeInputModule {}
