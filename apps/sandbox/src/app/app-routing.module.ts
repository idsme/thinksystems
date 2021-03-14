import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorUiComponent } from './calculator/calculator-ui/calculator-ui.component';
import { PageAboutComponent } from './page-about/page-about.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { SectionCalculationGameComponent } from './section-calculation-game/section-calculation-game.component';

const routes: Routes = [
  { path: 'just_show_calculator_ui', component: CalculatorUiComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'calculation_game', component: SectionCalculationGameComponent },
  { path: '**', redirectTo: 'calculation_game'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
