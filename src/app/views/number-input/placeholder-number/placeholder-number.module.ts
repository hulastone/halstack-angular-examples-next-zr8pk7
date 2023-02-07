import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderNumberComponent } from './placeholder-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlaceholderNumberComponent,
  },
];

@NgModule({
  declarations: [PlaceholderNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ],exports: [PlaceholderNumberComponent]
})
export class PlaceholderNumberModule { }
