import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAlertComponent } from './modal-alert.component';
import { DxcAlertModule, DxcButtonModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ModalAlertComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcAlertModule,
    DxcButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalAlertComponent,
      },
    ])
  ]
})
export class ModalAlertModule { }
