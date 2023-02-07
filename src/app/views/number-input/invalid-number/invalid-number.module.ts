import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidNumberComponent } from './invalid-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InvalidNumberComponent,
  },
];


@NgModule({
  declarations: [InvalidNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ],exports: [InvalidNumberComponent]
})
export class InvalidNumberModule { }
