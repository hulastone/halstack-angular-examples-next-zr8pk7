import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownWithIconsComponent } from './dropdown-with-icons.component';
import { DxcDropdownModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DropdownWithIconsComponent,
  },
];
@NgModule({
  declarations: [DropdownWithIconsComponent],
  imports: [
    CommonModule,
    DxcDropdownModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports: [DropdownWithIconsComponent]
})
export class DropdownWithIconsModule { }
