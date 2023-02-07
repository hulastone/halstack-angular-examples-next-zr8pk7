import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxcProgressbarModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { DeterminateDefaultProgressBarComponent } from './determinate-default-progress-bar.component';



@NgModule({
  declarations: [DeterminateDefaultProgressBarComponent],
  imports: [
    ThemeModule,
    DxcProgressbarModule, ThemeModule, RouterModule.forChild([
      {
        path: '',
        component: DeterminateDefaultProgressBarComponent,
      },
    ])
  ]
})
export class DeterminateDefaultProgressBarModule { }
