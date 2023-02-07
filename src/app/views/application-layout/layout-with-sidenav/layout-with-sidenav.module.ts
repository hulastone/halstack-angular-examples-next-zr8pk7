import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcApplicationLayoutModule, DxcFooterModule, ThemeModule, DxcHeaderModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';
import { LayoutWithSidenavComponent } from './layout-with-sidenav.component';



@NgModule({
  declarations: [LayoutWithSidenavComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcApplicationLayoutModule,
    DxcFooterModule,
    DxcHeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutWithSidenavComponent,
      },
    ])
  ]
})
export class LayoutWithSidenavModule { }
