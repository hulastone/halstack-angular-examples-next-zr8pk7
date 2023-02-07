import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledLinkComponent } from './disabled-link.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DisabledLinkComponent,
  },
];

@NgModule({
  declarations: [DisabledLinkComponent],
  imports: [
    CommonModule,
    DxcLinkModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports: [DisabledLinkComponent]
})
export class DisabledLinkModule { }
