import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcCardModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';
import { CardWithActionComponent } from './card-with-action.component';



@NgModule({
  declarations: [CardWithActionComponent],
  imports: [
    ThemeModule,
    DxcCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: CardWithActionComponent,
      },
    ])
  ]
})
export class CardWithActionModule { }
