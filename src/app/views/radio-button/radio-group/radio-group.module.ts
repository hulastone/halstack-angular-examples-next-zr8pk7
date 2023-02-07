import { NgModule } from '@angular/core';
import { RadioGroupComponent } from './radio-group.component';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RadioGroupComponent],
  imports: [
    ThemeModule,
    DxcRadioModule,
    RouterModule.forChild([
      {
        path: '',
        component: RadioGroupComponent,
      },
    ])
  ]
})
export class RadioGroupModule { }
