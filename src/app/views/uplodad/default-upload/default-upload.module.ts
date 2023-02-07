import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultUploadComponent } from './default-upload.component';
import { DxcUploadModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DefaultUploadComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcUploadModule,
    RouterModule.forChild([
      {
        path: '',
        component: DefaultUploadComponent,
      },
    ]),
  ],
})
export class DefaultUploadModule {}
