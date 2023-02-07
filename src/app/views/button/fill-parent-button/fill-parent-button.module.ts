import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentButtonComponent } from './fill-parent-button.component';
import { DxcButtonModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FillParentButtonComponent,
  },
];

@NgModule({
  declarations: [FillParentButtonComponent],
  imports: [
    CommonModule,
    DxcButtonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
})
export class FillParentButtonModule {}
