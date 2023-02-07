import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';
import {
  DxcHeadingModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { ErrorsHandler } from '../../service/error.service';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    DxcHeadingModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ErrorComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
  ],
})
export class ErrorModule {}
