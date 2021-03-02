import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorUiComponent } from './calculator-be/calculator-ui/calculator-ui.component';
import { CalculatorBeComponent } from './calculator-be/calculator-be.component';

const routes: Routes = [
  { path: "calc", component: CalculatorUiComponent },
  { path: "**", component: CalculatorBeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
