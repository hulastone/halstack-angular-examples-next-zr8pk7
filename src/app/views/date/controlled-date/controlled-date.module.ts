import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledDateComponent } from './controlled-date.component';
import { DxcDateModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ControlledDateComponent,
  },
];
@NgModule({
  declarations: [ControlledDateComponent],
  imports: [
    CommonModule,
    DxcDateModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [ControlledDateComponent],
})
export class ControlledDateModule {}
