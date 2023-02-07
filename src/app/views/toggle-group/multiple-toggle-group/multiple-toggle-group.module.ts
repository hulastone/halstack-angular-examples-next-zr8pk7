import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleToggleGroupComponent } from './multiple-toggle-group.component';
import {
  DxcToggleGroupModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MultipleToggleGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcToggleGroupModule,
    RouterModule.forChild([
      {
        path: '',
        component: MultipleToggleGroupComponent,
      },
    ]),
  ],
})
export class MultipleToggleGroupModule {}
