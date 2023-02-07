import { NgModule } from '@angular/core';
import { DefaultAccordionComponent } from './default-accordion.component';
import { RouterModule } from '@angular/router';
import { DxcAccordionModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultAccordionComponent],
  imports: [
    ThemeModule,
    DxcAccordionModule,
    RouterModule.forChild([
      {
        path: '',
        component: DefaultAccordionComponent,
      },
    ])
  ]
})
export class DefaultAccordionModule { }
