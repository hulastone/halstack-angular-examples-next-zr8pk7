import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizedInputTextComponent } from './sized-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SizedInputTextComponent,
  },
];

@NgModule({
  declarations: [SizedInputTextComponent],
  imports: [
    CommonModule,
    DxcInputTextModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports: [SizedInputTextComponent]
})
export class SizedInputTextModule { }
