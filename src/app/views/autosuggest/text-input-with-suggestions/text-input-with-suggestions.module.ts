import { NgModule } from '@angular/core';
import { TextInputWithSuggestionsComponent } from './text-input-with-suggestions.component';
import { DxcTextInputModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TextInputWithSuggestionsComponent,
  },
];


@NgModule({
  declarations: [TextInputWithSuggestionsComponent],
  imports: [
    DxcTextInputModule,
    ThemeModule,
    RouterModule.forChild(routes)
  ],
  exports: [TextInputWithSuggestionsComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }]
})
export class TextInputWithSuggestionsModule { }
