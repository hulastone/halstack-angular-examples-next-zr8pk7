import { NgModule } from '@angular/core';
import { CardWithLinkComponent } from './card-with-link.component';
import { RouterModule } from '@angular/router';
import { DxcCardModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [CardWithLinkComponent],
  imports: [
    ThemeModule,
    DxcCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: CardWithLinkComponent,
      },
    ])
  ]
})
export class CardWithLinkModule { }
