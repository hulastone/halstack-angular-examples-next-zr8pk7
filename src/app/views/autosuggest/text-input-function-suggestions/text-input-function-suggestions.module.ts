import { NgModule } from '@angular/core';
import { TextInputFunctionSuggestionsComponent } from './text-input-function-suggestions.component';
import { DxcTextInputModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TextInputFunctionSuggestionsComponent,
  },
];

@NgModule({
  declarations: [TextInputFunctionSuggestionsComponent],
  imports: [
    DxcTextInputModule,
    ThemeModule,
    RouterModule.forChild(routes)
  ],
  exports: [TextInputFunctionSuggestionsComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }]
})
export class TextInputFunctionSuggestionsModule { }
