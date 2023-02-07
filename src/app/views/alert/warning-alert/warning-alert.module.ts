import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcAlertModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';
import { WarningAlertComponent } from './warning-alert.component';



@NgModule({
  declarations: [WarningAlertComponent],
  imports: [
    ThemeModule,
    DxcAlertModule,
    RouterModule.forChild([
      {
        path: '',
        component: WarningAlertComponent,
      },
    ])
  ]
})
export class WarningAlertModule { }
