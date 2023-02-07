import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizedTagComponent } from './sized-tag.component';
import { DxcTagModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SizedTagComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTagModule,
    RouterModule.forChild([
      {
        path: '',
        component: SizedTagComponent,
      },
    ]),
  ],
})
export class SizedTagModule {}
