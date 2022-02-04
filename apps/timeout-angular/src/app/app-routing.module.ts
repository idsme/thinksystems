import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageTimeSheetComponent} from './site-section-hours-made/page-time-sheet/page-time-sheet.component';
import {UsersComponent} from './page-user-profile/users.component';
import {UsersModule} from './page-user-profile/users.module';
import {SharedRoutingModule} from '../shared/shared-routing.module';
import {PageTodaysDetailsComponent} from './site-section-hours-made/page-todays-details/page-todays-details.component';

const routes: Routes = [
  {path: '', component: PageTimeSheetComponent},
  {path: 'hours', component: PageTimeSheetComponent},
  {path: 'hours/page-todays-details', component: PageTodaysDetailsComponent},
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
