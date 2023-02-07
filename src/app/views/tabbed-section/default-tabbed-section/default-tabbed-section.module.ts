import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTabbedSectionComponent } from './default-tabbed-section.component';
import {
  DxcTabbedSectionModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DefaultTabbedSectionComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabbedSectionModule,
    RouterModule.forChild([
      {
        path: '',
        component: DefaultTabbedSectionComponent,
      },
    ]),
  ],
})
export class DefaultTabbedSectionModule {}
