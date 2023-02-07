import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcCheckboxModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { CheckboxUncontrolledComponent } from './checkbox-uncontrolled.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CheckboxUncontrolledComponent,
  },
];

@NgModule({
  declarations: [CheckboxUncontrolledComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcCheckboxModule,
    RouterModule.forChild(routes)
  ],exports: [CheckboxUncontrolledComponent],
})
export class CheckboxUncontrolledModule { }
