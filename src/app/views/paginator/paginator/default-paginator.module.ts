import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { DxcPaginatorModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    ThemeModule,
    DxcPaginatorModule,
    RouterModule.forChild([{
      path: '',
      component: PaginatorComponent,
    }])
  ],exports: [PaginatorComponent]
})
export class DefaultPaginatorModule { }
