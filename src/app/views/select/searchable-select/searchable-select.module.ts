import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { SearchableSelectComponent } from './searchable-select.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchableSelectComponent,
  },
];
@NgModule({
  declarations: [SearchableSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule,
    RouterModule.forChild(routes),
  ],
  exports: [SearchableSelectComponent],
})
export class SearchableSelectModule {}
