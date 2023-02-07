import { NgModule } from '@angular/core';
import { ControlledPasswordComponent } from './controlled-password.component';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ControlledPasswordComponent],
  imports: [
    ThemeModule,
    DxcPasswordInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledPasswordComponent,
      },
    ])
  ]
})
export class ControlledPasswordModule { }
