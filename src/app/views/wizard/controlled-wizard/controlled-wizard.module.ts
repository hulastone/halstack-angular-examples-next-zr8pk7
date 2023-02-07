import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledWizardComponent } from './controlled-wizard.component';
import { DxcWizardModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ControlledWizardComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcWizardModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledWizardComponent,
      },
    ]),
  ],
})
export class ControlledWizardModule {}
