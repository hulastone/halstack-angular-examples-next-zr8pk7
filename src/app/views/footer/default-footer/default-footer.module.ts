import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent } from './default-footer.component';
import { DxcFooterModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultFooterComponent,
  },
];

@NgModule({
  declarations: [DefaultFooterComponent],
  imports: [
    CommonModule,
    DxcFooterModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ],
  exports: [DefaultFooterComponent]
})
export class DefaultFooterModule { }
