import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { ErrorMultipleSelectComponent } from './error-multiple-select.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ErrorMultipleSelectComponent,
  },
];

@NgModule({
  declarations: [ErrorMultipleSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule,
    RouterModule.forChild(routes),
  ], exports: [ErrorMultipleSelectComponent]
})
export class ErrorMultipleSelectModule { }
