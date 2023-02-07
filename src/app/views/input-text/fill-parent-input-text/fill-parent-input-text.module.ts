import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentInputTextComponent } from './fill-parent-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FillParentInputTextComponent,
  },
];
@NgModule({
  declarations: [FillParentInputTextComponent],
  imports: [
    CommonModule,
    DxcInputTextModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [FillParentInputTextComponent]
})
export class FillParentInputTextModule { }
