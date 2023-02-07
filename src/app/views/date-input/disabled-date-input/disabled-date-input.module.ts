import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledDateInputComponent } from './disabled-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DisabledDateInputComponent,
  },
];
@NgModule({
  declarations: [DisabledDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [DisabledDateInputComponent]
})
export class DisabledDateInputModule { }
