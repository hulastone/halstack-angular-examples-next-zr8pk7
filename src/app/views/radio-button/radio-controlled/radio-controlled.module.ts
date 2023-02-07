import { NgModule } from '@angular/core';
import { RadioControlledComponent } from './radio-controlled.component';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RadioControlledComponent],
  imports: [
    ThemeModule,
    DxcRadioModule,
    RouterModule.forChild([
      {
        path: '',
        component: RadioControlledComponent,
      },
    ])
  ]
})
export class RadioControlledModule { }
