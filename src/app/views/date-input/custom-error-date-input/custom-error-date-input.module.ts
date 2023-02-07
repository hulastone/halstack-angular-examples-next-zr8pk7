import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomErrorDateInputComponent } from './custom-error-date-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: CustomErrorDateInputComponent,
  },
];

@NgModule({
  declarations: [CustomErrorDateInputComponent],
  imports: [
    CommonModule,
    DxcDateInputModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [CustomErrorDateInputComponent]
})
export class CustomErrorDateInputModule { }
