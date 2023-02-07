import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateWithHelperComponent } from './date-with-helper.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DateWithHelperComponent,
  },
];

@NgModule({
  declarations: [DateWithHelperComponent],
  imports: [
    CommonModule,
    DxcDateInputModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [DateWithHelperComponent]
})
export class DateWithHelperModule { }
