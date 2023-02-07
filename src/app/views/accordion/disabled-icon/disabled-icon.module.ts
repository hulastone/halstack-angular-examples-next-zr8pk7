import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledIconComponent } from './disabled-icon.component';
import { ThemeModule, DxcAccordionModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DisabledIconComponent],
  imports: [
    ThemeModule,
    DxcAccordionModule,
    RouterModule.forChild([
      {
        path: '',
        component: DisabledIconComponent,
      },
    ])
  ]
})
export class DisabledIconModule { }
