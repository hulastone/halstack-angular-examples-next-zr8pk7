import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorAlertComponent } from './error-alert.component';
import { DxcAlertModule, ThemeModule } from '@dxc-technology/halstack-angular';

const routes: Routes = [
  {
    path: '',
    component: ErrorAlertComponent,
  },
];

@NgModule({
  declarations: [ErrorAlertComponent],
  imports: [
    ThemeModule,
    DxcAlertModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorAlertModule { }
