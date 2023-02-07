import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledAccordionGroupComponent } from './controlled-accordion-group.component';
import { Routes, RouterModule } from '@angular/router';
import { DxcAccordionGroupModule, DxcAccordionModule, ThemeModule } from '@dxc-technology/halstack-angular';

const routes: Routes = [
  {
    path: '',
    component: ControlledAccordionGroupComponent,
  },
];

@NgModule({
  declarations: [ControlledAccordionGroupComponent],
  imports: [
    ThemeModule,
    DxcAccordionGroupModule,
    DxcAccordionModule,
    RouterModule.forChild(routes)]
})
export class ControlledAccordionGroupModule { }
