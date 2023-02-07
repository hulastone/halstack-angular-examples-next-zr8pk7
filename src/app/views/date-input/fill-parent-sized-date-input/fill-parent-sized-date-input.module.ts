import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentSizedDateInputComponent } from './fill-parent-sized-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FillParentSizedDateInputComponent,
  },
];

@NgModule({
  declarations: [FillParentSizedDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [FillParentSizedDateInputComponent]
})
export class FillParentSizedDateInputModule { }
