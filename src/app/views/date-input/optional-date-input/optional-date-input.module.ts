import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalDateInputComponent } from './optional-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OptionalDateInputComponent,
  },
];
@NgModule({
  declarations: [OptionalDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [OptionalDateInputComponent]
})
export class OptionalDateInputModule { }
