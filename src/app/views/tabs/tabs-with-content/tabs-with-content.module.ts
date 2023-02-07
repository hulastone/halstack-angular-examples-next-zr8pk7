import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsWithContentComponent } from './tabs-with-content.component';
import { DxcTabsModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabsWithContentComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TabsWithContentComponent,
      },
    ]),
  ],
})
export class TabsWithContentModule {}
