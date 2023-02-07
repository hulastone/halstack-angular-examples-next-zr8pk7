import { NgModule } from '@angular/core';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { UncontrolledPasswordComponent } from './uncontrolled-password.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UncontrolledPasswordComponent],
  imports: [
    ThemeModule,
    DxcPasswordInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: UncontrolledPasswordComponent,
      },
    ])
  ]
})
export class UncontrolledPasswordModule { }
