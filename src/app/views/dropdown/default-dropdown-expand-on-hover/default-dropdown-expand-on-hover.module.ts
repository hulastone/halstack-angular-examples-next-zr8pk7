import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDropdownExpandOnHoverComponent } from './default-dropdown-expand-on-hover.component';
import { DxcDropdownModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultDropdownExpandOnHoverComponent,
  },
];

@NgModule({
  declarations: [DefaultDropdownExpandOnHoverComponent],
  imports: [
    CommonModule,
    DxcDropdownModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports:[DefaultDropdownExpandOnHoverComponent]
})
export class DefaultDropdownExpandOnHoverModule { }
