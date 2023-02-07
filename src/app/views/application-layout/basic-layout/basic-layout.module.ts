import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcApplicationLayoutModule, DxcFooterModule, DxcHeaderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './basic-layout.component';



@NgModule({
  declarations: [BasicLayoutComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcApplicationLayoutModule,
    DxcFooterModule,
    DxcHeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: BasicLayoutComponent,
      },
    ])
  ]
})
export class BasicLayoutModule { }
