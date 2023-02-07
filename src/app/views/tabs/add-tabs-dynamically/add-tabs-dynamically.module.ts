import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTabsDynamicallyComponent } from './add-tabs-dynamically.component';
import {
  DxcButtonModule,
  DxcTabsModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddTabsDynamicallyComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabsModule,
    DxcButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddTabsDynamicallyComponent,
      },
    ]),
  ],
})
export class AddTabsDynamicallyModule {}
