import { NgModule } from '@angular/core';
import { AccordionWithAssistiveTextComponent } from './accordion-with-assistive-text.component';
import { DxcAccordionModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AccordionWithAssistiveTextComponent],
  imports: [
    ThemeModule,
    DxcAccordionModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccordionWithAssistiveTextComponent,
      },
    ])
  ]
})
export class AccordionWithAssistiveTextModule { }
