import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  DxcButtonModule,
  ThemeModule,
  ThemeService,
} from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { SizedButtonComponent } from './sized-button.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SizedButtonComponent,
  },
];

@NgModule({
  declarations: [SizedButtonComponent],
  imports: [
    CommonModule,
    DxcButtonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [SizedButtonComponent],
})
export class SizedButtonModule {}
