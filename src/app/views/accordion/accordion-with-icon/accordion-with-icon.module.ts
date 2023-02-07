import { NgModule } from '@angular/core';
import { DxcAccordionModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';
import { AccordionWithIconComponent } from './accordion-with-icon.component';



@NgModule({
  declarations: [AccordionWithIconComponent],
  imports: [
    ThemeModule,
    DxcAccordionModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccordionWithIconComponent,
      },
    ])
  ]
})
export class AccordionWithIconModule { }
