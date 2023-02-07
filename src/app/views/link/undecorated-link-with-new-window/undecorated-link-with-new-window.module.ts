import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndecoratedLinkWithNewWindowComponent } from './undecorated-link-with-new-window.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UndecoratedLinkWithNewWindowComponent,
  },
];

@NgModule({
  declarations: [UndecoratedLinkWithNewWindowComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcLinkModule,
    RouterModule.forChild(routes),
  ], exports: [UndecoratedLinkWithNewWindowComponent]
})
export class UndecoratedLinkWithNewWindowModule { }
