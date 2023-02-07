import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagWithLinkComponent } from './tag-with-link.component';
import { DxcTagModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TagWithLinkComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTagModule,
    RouterModule.forChild([
      {
        path: '',
        component: TagWithLinkComponent,
      },
    ]),
  ],
  exports: [TagWithLinkComponent],
})
export class TagWithLinkModule {}
