import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorUiComponent } from './calculator-be/calculator-ui/calculator-ui.component';

const routes: Routes = [
  { path: "just_show_calculator_ui", component: CalculatorUiComponent },
  { path: "calculator", component: CalculatorUiComponent },
  { path: "**", redirectTo: 'calculator'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
