import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxcDateModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { UncontrolledDateComponent } from './uncontrolled-date.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UncontrolledDateComponent,
  },
];
@NgModule({
  declarations: [UncontrolledDateComponent],
  imports: [
    CommonModule,
    DxcDateModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [UncontrolledDateComponent]

})
export class UncontrolledDateModule { }
