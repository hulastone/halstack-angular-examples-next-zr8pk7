import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledTabsComponent } from './uncontrolled-tabs.component';
import { DxcTabsModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UncontrolledTabsComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UncontrolledTabsComponent,
      },
    ]),
  ],
})
export class UncontrolledTabsModule {}
