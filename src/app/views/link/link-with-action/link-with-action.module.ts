import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkWithActionComponent } from './link-with-action.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LinkWithActionComponent,
  },
];

@NgModule({
  declarations: [LinkWithActionComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcLinkModule,
    RouterModule.forChild(routes),
  ],exports: [LinkWithActionComponent]
})
export class LinkWithActionModule { }
