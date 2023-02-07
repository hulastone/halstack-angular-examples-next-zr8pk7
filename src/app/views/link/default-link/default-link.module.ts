import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLinkComponent } from './default-link.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultLinkComponent,
  },
];
@NgModule({
  declarations: [DefaultLinkComponent],
  imports: [
    CommonModule,
    DxcLinkModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],exports: [DefaultLinkComponent]
})
export class DefaultLinkModule { }
