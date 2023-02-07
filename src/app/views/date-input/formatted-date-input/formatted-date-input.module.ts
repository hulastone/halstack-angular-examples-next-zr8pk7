import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormattedDateInputComponent } from './formatted-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FormattedDateInputComponent,
  },
];

@NgModule({
  declarations: [FormattedDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [FormattedDateInputComponent]
})
export class FormattedDateInputModule { }
