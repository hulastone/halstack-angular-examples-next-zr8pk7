import { NgModule } from '@angular/core';
import { RadioUncontrolledComponent } from './radio-uncontrolled.component';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RadioUncontrolledComponent],
  imports: [
    ThemeModule,
    DxcRadioModule,
    RouterModule.forChild([
      {
        path: '',
        component: RadioUncontrolledComponent,
      },
    ])
  ]
})
export class RadioUncontrolledModule { }
