import { NgModule } from '@angular/core';
import { ClosableInlineAlertComponent } from './closable-inline-alert.component';
import { RouterModule, Routes } from '@angular/router';
import { DxcAlertModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ClosableInlineAlertComponent,
  },
];


@NgModule({
  declarations: [ClosableInlineAlertComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcAlertModule,
    RouterModule.forChild(routes)
  ]
})
export class ClosableInlineAlertModule { }
