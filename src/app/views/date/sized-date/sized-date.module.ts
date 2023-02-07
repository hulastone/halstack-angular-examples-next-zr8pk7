import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizedDateComponent } from './sized-date.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxcDateModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SizedDateComponent,
  },
];

@NgModule({
  declarations: [SizedDateComponent],
  imports: [
    CommonModule,
    DxcDateModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [SizedDateComponent]
})
export class SizedDateModule { }
