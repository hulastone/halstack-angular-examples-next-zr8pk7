import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSelectComponent } from './error-select.component';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ErrorSelectComponent,
  },
];

@NgModule({
  declarations: [ErrorSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule,
    RouterModule.forChild(routes),
  ], exports: [ErrorSelectComponent]
})
export class ErrorSelectModule { }
