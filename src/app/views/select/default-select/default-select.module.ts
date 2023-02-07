import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSelectComponent } from './default-select.component';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultSelectComponent,
  },
];
@NgModule({
  declarations: [DefaultSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule,
    RouterModule.forChild(routes),
  ],
  exports: [DefaultSelectComponent],
})
export class DefaultSelectModule {}
