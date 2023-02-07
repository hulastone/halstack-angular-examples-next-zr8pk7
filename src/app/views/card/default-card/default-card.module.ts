import { NgModule } from '@angular/core';
import { DefaultCardComponent } from './default-card.component';
import { DxcCardModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DefaultCardComponent],
  imports: [
    ThemeModule,
    DxcCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: DefaultCardComponent,
      },
    ])
  ]
})
export class DefaultCardModule { }
