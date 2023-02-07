import { NgModule } from '@angular/core';
import { ControlledAccordionComponent } from './controlled-accordion.component';
import { DxcAccordionModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ControlledAccordionComponent],
  imports: [
    ThemeModule,
    DxcAccordionModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledAccordionComponent,
      },
    ])
  ]
})
export class ControlledAccordionModule { }
