import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledNumberComponent } from './disabled-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DisabledNumberComponent,
  },
];

@NgModule({
  declarations: [DisabledNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ], exports: [DisabledNumberComponent]
})
export class DisabledNumberModule { }
