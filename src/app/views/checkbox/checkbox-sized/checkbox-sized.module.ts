import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxSizedComponent } from './checkbox-sized.component';
import { DxcCheckboxModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CheckboxSizedComponent,
  },
];

@NgModule({
  declarations: [CheckboxSizedComponent],
  imports: [
    CommonModule,
    DxcCheckboxModule,
    ThemeModule,
    RouterModule.forChild(routes)
  ],
  exports: [CheckboxSizedComponent]
})
export class CheckboxSizedModule { }


