import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertWithChildrenComponent } from './alert-with-children.component';
import { DxcAlertModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AlertWithChildrenComponent,
  },
];

@NgModule({
  declarations: [AlertWithChildrenComponent],
  imports: [
    ThemeModule,
    DxcAlertModule,
    RouterModule.forChild(routes)
  ]
})
export class AlertWithChildrenModule { }
