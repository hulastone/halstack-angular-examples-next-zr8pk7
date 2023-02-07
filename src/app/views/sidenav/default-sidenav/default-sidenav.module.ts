import { NgModule } from '@angular/core';
import { DefaultSidenavComponent } from './default-sidenav.component';
import { DxcSideNavModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DefaultSidenavComponent],
  imports: [
    ThemeModule,
    DxcSideNavModule,
    RouterModule.forChild([
      {
        path: '',
        component: DefaultSidenavComponent,
      },
    ])
  ]
})
export class DefaultSidenavModule { }
