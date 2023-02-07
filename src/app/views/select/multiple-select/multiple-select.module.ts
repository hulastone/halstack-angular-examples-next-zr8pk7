import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { MultipleSelectComponent } from './multiple-select.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MultipleSelectComponent,
  },
];
@NgModule({
  declarations: [MultipleSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule,
    RouterModule.forChild(routes),
  ],
  exports: [MultipleSelectComponent],
})
export class MultipleSelectModule {}
