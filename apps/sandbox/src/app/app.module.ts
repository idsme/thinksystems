import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorUiComponent } from './calculator-be/calculator-ui/calculator-ui.component';
import { CalculatorBeComponent } from './calculator-be/calculator-be.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CalculatorService } from './calculator-be/rest/calculator.service';
import { ApiService } from './calculator-be/rest/api.service';

// TODO IDSME Import MD module.. to keep clean.
// Place calculator in its own module.?
@NgModule({
  declarations: [AppComponent, CalculatorUiComponent, CalculatorBeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [CalculatorService, ApiService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
