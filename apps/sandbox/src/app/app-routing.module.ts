import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorUiComponent } from './calculator/calculator-ui/calculator-ui.component';
import { PageAboutComponent } from './page-about/page-about.component';

import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: "just_show_calculator_ui", component: CalculatorUiComponent },
  { path: "calculator", component: CalculatorComponent },
  { path: "calculations-history", component: CalculatorUiComponent },
  { path: "about", component: PageAboutComponent },
  { path: "**", redirectTo: 'about'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
