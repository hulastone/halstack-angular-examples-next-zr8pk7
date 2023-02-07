import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultChipComponent } from './default-chip.component';
import { DxcChipModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DefaultChipComponent],
  imports: [
    ThemeModule,
    DxcChipModule,
    RouterModule.forChild([
      {
        path: '',
        component: DefaultChipComponent,
      },
    ])
  ]
})
export class DefaultChipModule { }
