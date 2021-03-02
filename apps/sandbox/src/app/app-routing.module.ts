import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorBeComponent } from './calculator-be/calculator-be.component';

const routes: Routes = [
  { path: "calc", component: CalculatorComponent },
  { path: "calcbe", component: CalculatorBeComponent},
  { path: "**", component: CalculatorBeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
