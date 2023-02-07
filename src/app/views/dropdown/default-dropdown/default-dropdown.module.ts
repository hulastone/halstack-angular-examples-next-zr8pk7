import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDropdownComponent } from './default-dropdown.component';
import { DxcDropdownModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultDropdownComponent,
  },
];

@NgModule({
  declarations: [DefaultDropdownComponent],
  imports: [
    CommonModule,
    DxcDropdownModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports: [DefaultDropdownComponent]
})
export class DefaultDropdownModule { }
