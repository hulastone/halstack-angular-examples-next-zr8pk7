import { NgModule } from '@angular/core';
import { RadioLabelPositionComponent } from './radio-label-position.component';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RadioLabelPositionComponent],
  imports: [
    ThemeModule,
    DxcRadioModule,
    RouterModule.forChild([
      {
        path: '',
        component: RadioLabelPositionComponent,
      },
    ])
  ]
})
export class RadioLabelPositionModule { }
