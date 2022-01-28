import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageWorkingPeriodComponent} from './site-section-hours-made/page-working-period/page-working-period.component';
import {UsersComponent} from './page-user-profile/users.component';
import {UsersModule} from './page-user-profile/users.module';
import {SharedRoutingModule} from '../shared/shared-routing.module';
import {PageTodayDetailsComponent} from './site-section-hours-made/page-today-details/page-today-details.component';
import { PageSiteMapComponent } from './page-site-map/page-site-map.component';

const routes: Routes = [
  {path: '', component: PageWorkingPeriodComponent},
  {path: 'r', component: PageSiteMapComponent},
  {path: 'hours', component: PageWorkingPeriodComponent},
  {path: 'hours/page-today-details', component: PageTodayDetailsComponent},
  {path: 'page-user-profile', component: UsersComponent},
  {path: 'about', loadChildren: () => import('../shared/shared.module').then(m => m.SharedModule)}
];

@NgModule({
  imports: [
    SharedRoutingModule,
    RouterModule.forRoot(routes),
    UsersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
