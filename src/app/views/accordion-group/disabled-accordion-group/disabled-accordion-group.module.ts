import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcAccordionGroupModule, DxcAccordionModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';
import { DisabledAccordionGroupComponent } from './disabled-accordion-group.component';


const routes: Routes = [
  {
    path: '',
    component: DisabledAccordionGroupComponent
  }
];

@NgModule({
  declarations: [DisabledAccordionGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcAccordionGroupModule,
    DxcAccordionModule,
    RouterModule.forChild(routes)]
})
export class DisabledAccordionGroupModule { }
