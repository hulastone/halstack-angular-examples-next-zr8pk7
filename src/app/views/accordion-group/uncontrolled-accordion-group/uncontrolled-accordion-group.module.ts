import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UncontrolledAccordionGroupComponent } from './uncontrolled-accordion-group.component';
import { DxcAccordionGroupModule, DxcAccordionModule, ThemeModule } from '@dxc-technology/halstack-angular';

const routes: Routes = [
  {
    path: '',
    component: UncontrolledAccordionGroupComponent,
  },
];

@NgModule({
  declarations: [UncontrolledAccordionGroupComponent],
  imports: [
    ThemeModule,
    DxcAccordionGroupModule,
    DxcAccordionModule,
    RouterModule.forChild(routes),

  ]
})
export class UncontrolledAccordionGroupModule { }
