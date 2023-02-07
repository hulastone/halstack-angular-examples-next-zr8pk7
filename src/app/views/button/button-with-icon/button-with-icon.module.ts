import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  DxcButtonModule,
  ThemeModule,
  ThemeService,
} from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { ButtonWithIconComponent } from './button-with-icon.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ButtonWithIconComponent,
  },
];

@NgModule({
  declarations: [ButtonWithIconComponent],
  imports: [
    CommonModule,
    DxcButtonModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [ButtonWithIconComponent]
})
export class ButtonWithIconModule {}
