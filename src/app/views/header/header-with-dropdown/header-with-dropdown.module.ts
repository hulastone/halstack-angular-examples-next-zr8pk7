import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWithDropdownComponent } from './header-with-dropdown.component';
import { DxcDropdownModule, DxcHeaderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HeaderWithDropdownComponent,
  },
];
@NgModule({
  declarations: [HeaderWithDropdownComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcHeaderModule,
    DxcDropdownModule,
    RouterModule.forChild(routes),
  ], exports: [HeaderWithDropdownComponent]
})
export class HeaderWithDropdownModule { }
