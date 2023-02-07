import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcWizardModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { UncontrolledWizardComponent } from './uncontrolled-wizard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UncontrolledWizardComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcWizardModule,
    RouterModule.forChild([
      {
        path: '',
        component: UncontrolledWizardComponent,
      },
    ]),
  ],
})
export class UncontrolledWizardModule {}
