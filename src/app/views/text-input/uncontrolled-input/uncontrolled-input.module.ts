import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledInputComponent } from './uncontrolled-input.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UncontrolledInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: UncontrolledInputComponent,
      },
    ]),
  ],
})
export class UncontrolledInputModule {}
