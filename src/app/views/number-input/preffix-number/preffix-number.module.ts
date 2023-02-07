import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreffixNumberComponent } from './preffix-number.component';
import { DxcNumberInputModule, ThemeModule, DxcTextInputModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PreffixNumberComponent,
  },
];

@NgModule({
  declarations: [PreffixNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    DxcTextInputModule,
    RouterModule.forChild(routes),
  ], exports: [PreffixNumberComponent]
})
export class PreffixNumberModule { }
