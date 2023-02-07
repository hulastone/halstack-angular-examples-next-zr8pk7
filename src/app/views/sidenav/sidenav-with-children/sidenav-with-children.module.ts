import { NgModule } from '@angular/core';
import { SidenavWithChildrenComponent } from './sidenav-with-children.component';
import { ThemeModule, DxcSideNavModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidenavWithChildrenComponent],
  imports: [
    ThemeModule,
    DxcSideNavModule,
    RouterModule.forChild([
      {
        path: '',
        component: SidenavWithChildrenComponent,
      },
    ])
  ]
})
export class SidenavWithChildrenModule { }
