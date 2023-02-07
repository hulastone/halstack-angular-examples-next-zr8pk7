import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkWithIconComponent } from './link-with-icon.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LinkWithIconComponent,
  },
];
@NgModule({
  declarations: [LinkWithIconComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcLinkModule,
    RouterModule.forChild(routes),
  ], exports: [LinkWithIconComponent]
})
export class LinkWithIconModule { }
