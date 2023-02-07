import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidDateInputComponent } from './invalid-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InvalidDateInputComponent,
  },
];

@NgModule({
  declarations: [InvalidDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [InvalidDateInputComponent]
})
export class InvalidDateInputModule { }
