import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipWithIconsComponent } from './chip-with-icons.component';
import { DxcChipModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ChipWithIconsComponent],
  imports: [
    ThemeModule,
    DxcChipModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChipWithIconsComponent,
      },
    ])
  ]
})
export class ChipWithIconsModule { }
