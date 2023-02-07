import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithActionComponent } from './input-with-action.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputWithActionComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputWithActionComponent,
      },
    ]),
  ],
})
export class InputWithActionModule {}
