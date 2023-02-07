import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcAlertModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';
import { SuccessAlertComponent } from './success-alert.component';



@NgModule({
  declarations: [SuccessAlertComponent],
  imports: [
    ThemeModule,
    DxcAlertModule,
    RouterModule.forChild([
      {
        path: '',
        component: SuccessAlertComponent,
      },
    ])
  ]
})
export class SuccessAlertModule { }
