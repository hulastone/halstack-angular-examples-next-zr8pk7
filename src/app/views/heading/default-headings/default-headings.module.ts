import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHeadingModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { DefaultHeadingsComponent } from './default-headings.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultHeadingsComponent,
  },
];


@NgModule({
  declarations: [DefaultHeadingsComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcHeadingModule,
    RouterModule.forChild(routes),
  ],
   exports: [DefaultHeadingsComponent]
})
export class DefaultHeadingsModule { }
