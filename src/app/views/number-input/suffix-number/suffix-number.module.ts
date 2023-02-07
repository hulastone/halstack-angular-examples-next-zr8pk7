import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuffixNumberComponent } from './suffix-number.component';
import { DxcNumberInputModule, DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SuffixNumberComponent,
  },
];

@NgModule({
  declarations: [SuffixNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    DxcTextInputModule,
    RouterModule.forChild(routes),
  ],exports: [SuffixNumberComponent]
})
export class SuffixNumberModule { }
