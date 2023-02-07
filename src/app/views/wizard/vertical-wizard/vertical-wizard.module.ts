import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcWizardModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { VerticalWizardComponent } from './vertical-wizard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VerticalWizardComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcWizardModule,
    RouterModule.forChild([
      {
        path: '',
        component: VerticalWizardComponent,
      },
    ]),
  ],
})
export class VerticalWizardModule {}
