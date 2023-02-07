import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContenttFooterComponent } from './custom-contentt-footer.component';
import { DxcFooterModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomContenttFooterComponent,
  },
];

@NgModule({
  declarations: [CustomContenttFooterComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcFooterModule,
    RouterModule.forChild(routes),
  ], exports: [CustomContenttFooterComponent]
})
export class CustomContenttFooterModule { }
