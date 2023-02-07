import { NgModule } from '@angular/core';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RadioSizedComponent } from './radio-sized.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RadioSizedComponent],
  imports: [
    ThemeModule,
    DxcRadioModule,
    RouterModule.forChild([
      {
        path: '',
        component: RadioSizedComponent,
      },
    ])
  ]
})
export class RadioSizedModule { }
