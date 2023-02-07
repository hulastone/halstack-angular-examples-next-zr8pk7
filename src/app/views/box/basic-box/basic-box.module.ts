import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBoxComponent } from './basic-box.component';
import { DxcBoxModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BasicBoxComponent],
  imports: [
    ThemeModule,
    DxcBoxModule,
    RouterModule.forChild([
      {
        path: '',
        component: BasicBoxComponent,
      },
    ])

  ]
})
export class BasicBoxModule { }
