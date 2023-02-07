import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTagComponent } from './basic-tag.component';
import { DxcTagModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BasicTagComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTagModule,
    RouterModule.forChild([
      {
        path: '',
        component: BasicTagComponent,
      },
    ]),
  ],
})
export class BasicTagModule {}
