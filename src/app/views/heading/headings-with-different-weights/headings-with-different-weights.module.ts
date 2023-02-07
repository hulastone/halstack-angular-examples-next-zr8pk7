import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingsWithDifferentWeightsComponent } from './headings-with-different-weights.component';
import { DxcHeadingModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HeadingsWithDifferentWeightsComponent,
  },
];
@NgModule({
  declarations: [HeadingsWithDifferentWeightsComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcHeadingModule,
    RouterModule.forChild(routes),
  ], exports: [HeadingsWithDifferentWeightsComponent]
})
export class HeadingsWithDifferentWeightsModule { }
