import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicToggleGroupComponent } from './basic-toggle-group.component';
import {
  DxcToggleGroupModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BasicToggleGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcToggleGroupModule,
    RouterModule.forChild([
      {
        path: '',
        component: BasicToggleGroupComponent,
      },
    ]),
  ],
})
export class BasicToggleGroupModule {}
