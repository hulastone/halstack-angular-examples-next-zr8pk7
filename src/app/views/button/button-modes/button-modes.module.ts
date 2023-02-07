import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcButtonModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { ButtonModesComponent } from './button-modes.component';



@NgModule({
  declarations: [ButtonModesComponent],
  imports: [
     DxcButtonModule,
     ThemeModule
  ], exports: [ButtonModesComponent]
})
export class ButtonModesModule { }
