import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAlertComponent } from './info-alert.component';
import { RouterModule, Routes } from '@angular/router';
import { DxcAlertModule, ThemeModule } from '@dxc-technology/halstack-angular';


const routes: Routes = [
  {
    path: '',
    component: InfoAlertComponent,
  },
];
@NgModule({
  declarations: [InfoAlertComponent],
  imports: [
    ThemeModule,
    DxcAlertModule,
    RouterModule.forChild(routes)
  ]
})
export class InfoAlertModule { }
