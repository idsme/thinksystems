import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageRouterLinkTesterComponent} from './duplo/page-router-link-tester/page-router-link-tester.component';
import {FeedbackComponent} from './duplo/feedback/feedback.component';
import {ApplicationVersionComponent} from './duplo/application-version/application-version.component';
import { UsersComponent } from '../app/page-user-profile/users.component';
import { ReleaseNotesComponent } from './duplo/release-notes/release-notes.component';
import { ConfigComponent } from './duplo/config/config.component';

// TODO IDSME Extract Routes to Seperate file.
// Recipe Shared Prod duplo routes
// Developer nows package he can go to that component as shared/release-notes will be a supported url. It will even change the the preferred whic is about/release-notes
export const routes: Routes = [
  {path: 'about', redirectTo: 'r', pathMatch: 'full'}, // Redirect to correct url.
  {path: 'about/application-version', component: ApplicationVersionComponent},
  {path: 'about/config', component: ConfigComponent},
  {path: 'about/release-notes', component: ReleaseNotesComponent},
  {path: 'about/feedback', component: FeedbackComponent},
  {path: 'about/page-router-link-tester', component: PageRouterLinkTesterComponent}, // Tired of testing routes that should work goto to this link and see all prod-links that should work.
  {path: 'about/r', component: PageRouterLinkTesterComponent}, // Tired of testing routes that should work goto to this link and see all prod-links that should work.
  {path: 'about/user', component: UsersComponent}, // Tired of testing routes that should work goto to this link and see all prod-links that should work.
//  {path: '**', pathMatch: 'full', redirectTo: 'about/file-not-found'} Not working catches to much if activated
];
// Explicitly not here as '' does not work in ap-routing.ts { path: '**', redirectTo: 'about/file-not-found' } // Decide if page not found we show error or go to the home or results - overview page.


// Shared duplo development routes easy testing/debugging of components each component as all have a direct link
export const testRoutes: Routes = [
  {path: '', component: PageRouterLinkTesterComponent}, // Tired of testing routes that should work goto to this link
  {path: 'page-router-link-tester', component: PageRouterLinkTesterComponent}, // Tired of testing routes that should work goto to this link
  {path: '**', redirectTo: 'page-router-link-tester'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}
