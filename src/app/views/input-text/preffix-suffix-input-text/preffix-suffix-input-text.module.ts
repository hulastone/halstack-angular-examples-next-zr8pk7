import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreffixSuffixInputTextComponent } from './preffix-suffix-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PreffixSuffixInputTextComponent,
  },
];
@NgModule({
  declarations: [PreffixSuffixInputTextComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcInputTextModule,
    RouterModule.forChild(routes),
  ], exports: [PreffixSuffixInputTextComponent]
})
export class PreffixSuffixInputTextModule { }
