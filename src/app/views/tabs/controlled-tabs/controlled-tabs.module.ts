import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledTabsComponent } from './controlled-tabs.component';
import { DxcTabsModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ControlledTabsComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledTabsComponent,
      },
    ]),
  ],
})
export class ControlledTabsModule {}
