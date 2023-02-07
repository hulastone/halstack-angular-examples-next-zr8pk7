import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskedInputTextComponent } from './masked-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MaskedInputTextComponent,
  },
];
@NgModule({
  declarations: [MaskedInputTextComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcInputTextModule,
    RouterModule.forChild(routes),
  ], exports: [MaskedInputTextComponent]
})
export class MaskedInputTextModule { }
