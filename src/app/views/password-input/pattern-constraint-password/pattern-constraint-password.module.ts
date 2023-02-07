import { NgModule } from '@angular/core';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { PatternConstraintPasswordComponent } from './pattern-constraint-password.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PatternConstraintPasswordComponent],
  imports: [
    ThemeModule,
    DxcPasswordInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: PatternConstraintPasswordComponent,
      },
    ])
  ]
})
export class PatternConstraintPasswordModule { }
