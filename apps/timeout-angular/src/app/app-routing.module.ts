import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkingPeriodPageLayoutComponent} from './hoursmade/working-period-page-layout/working-period-page-layout.component';
import {UsersComponent} from './users/users.component';
import {UsersModule} from './users/users.module';
import {SharedRoutingModule} from '../shared/shared-routing.module';
import {TodayComponent} from './hoursmade/today/today.component';

const routes: Routes = [
  {path: '', component: WorkingPeriodPageLayoutComponent},
  {path: 'hours', component: WorkingPeriodPageLayoutComponent},
  {path: 'hours/today', component: TodayComponent},
  {path: 'users', component: UsersComponent},
  {path: 'about', loadChildren: () => import('../shared/shared.module').then(m => m.SharedModule)}
];
// {path: 'recepten', loadChildren: './recipes/recipes.module#RecipesModule'},

@NgModule({
  imports: [
    SharedRoutingModule,
    RouterModule.forRoot(routes),
    UsersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
