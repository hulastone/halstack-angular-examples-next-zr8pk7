import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModesModule } from './views/button/button-modes/button-modes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorModule } from './views/error/error.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    ButtonModesModule,
    AppRoutingModule,
    ThemeModule,
    ErrorModule,
  ],
  providers: [{ provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
