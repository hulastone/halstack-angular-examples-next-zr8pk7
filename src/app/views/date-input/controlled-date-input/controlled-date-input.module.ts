import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { ControlledDateInputComponent } from './controlled-date-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ControlledDateInputComponent,
  },
];
@NgModule({
  declarations: [ControlledDateInputComponent],
  imports: [
    CommonModule,
    DxcDateInputModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [ControlledDateInputComponent]
})
export class ControlledDateInputModule { }
