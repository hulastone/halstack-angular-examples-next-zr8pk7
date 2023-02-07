import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table.component';
import { DxcTableModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SimpleTableComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: SimpleTableComponent,
      },
    ]),
  ],
})
export class SimpleTableModule {}
