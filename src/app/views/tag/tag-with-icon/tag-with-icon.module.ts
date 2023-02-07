import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagWithIconComponent } from './tag-with-icon.component';
import { DxcTagModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TagWithIconComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTagModule,
    RouterModule.forChild([
      {
        path: '',
        component: TagWithIconComponent,
      },
    ]),
  ],
})
export class TagWithIconModule {}
