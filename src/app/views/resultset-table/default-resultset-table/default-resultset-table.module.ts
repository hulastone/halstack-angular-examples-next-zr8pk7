import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultResultsetTableComponent } from './default-resultset-table.component';
import { ThemeModule, DxcResultsetTableModule, DxcButtonModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DefaultResultsetTableComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcButtonModule,
    DxcResultsetTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: DefaultResultsetTableComponent,
      },
    ])
  ]
})
export class DefaultResultsetTableModule { }
