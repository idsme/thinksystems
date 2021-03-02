import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorUiComponent } from './calculator/calculator-ui/calculator-ui.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageAboutComponent } from './page-about/page-about.component';
import { CalculatorService } from './calculator/services/calculator.service';

@NgModule({
  declarations: [AppComponent, CalculatorUiComponent, CalculatorComponent, PageAboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [CalculatorService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
