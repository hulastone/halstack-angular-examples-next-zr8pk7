import { NgModule } from '@angular/core';
import { DxcAlertModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';
import { SizedAlertComponent } from './sized-alert.component';



@NgModule({
  declarations: [SizedAlertComponent],
  imports: [
    ThemeModule,
    DxcAlertModule,
    RouterModule.forChild([
      {
        path: '',
        component: SizedAlertComponent,
      },
    ])
  ]
})
export class SizedAlertModule { }
