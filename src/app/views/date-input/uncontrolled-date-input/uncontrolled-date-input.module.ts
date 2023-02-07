import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UncontrolledDateInputComponent } from './uncontrolled-date-input.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UncontrolledDateInputComponent,
  },
];
@NgModule({
  declarations: [UncontrolledDateInputComponent],
  imports: [
    CommonModule,
    DxcDateInputModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [UncontrolledDateInputComponent]
})
export class UncontrolledDateInputModule { }
