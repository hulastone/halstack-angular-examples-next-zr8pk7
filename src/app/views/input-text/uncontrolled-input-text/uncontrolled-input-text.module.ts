import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledInputTextComponent } from './uncontrolled-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UncontrolledInputTextComponent,
  },
];
@NgModule({
  declarations: [UncontrolledInputTextComponent],
  imports: [
    CommonModule,
    DxcInputTextModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ], exports: [UncontrolledInputTextComponent]
})
export class UncontrolledInputTextModule { }
