import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndeterminateDefaultProgressBarComponent } from './undeterminate-default-progress-bar.component';
import { DxcProgressbarModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UndeterminateDefaultProgressBarComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcProgressbarModule, ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: UndeterminateDefaultProgressBarComponent,
      },
    ])
  ]
})
export class UndeterminateDefaultProgressBarModule { }
