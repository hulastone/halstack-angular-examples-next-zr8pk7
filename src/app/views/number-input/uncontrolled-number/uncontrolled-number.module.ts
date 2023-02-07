import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledNumberComponent } from './uncontrolled-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UncontrolledNumberComponent,
  },
];

@NgModule({
  declarations: [UncontrolledNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    RouterModule.forChild(routes),
  ],exports: [UncontrolledNumberComponent]
})
export class UncontrolledNumberModule { }
