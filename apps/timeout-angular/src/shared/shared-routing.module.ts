import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReleasenotesComponent} from './layout/releasenotes/releasenotes.component';
import {FileNotFoundComponent} from './duplo/file-not-found/file-not-found.component';
import {RouterLinkTesterComponent} from './duplo/router-link-tester/router-link-tester.component';
import {ConfigComponent} from './duplo/config/config.component';
import {FeedbackComponent} from './duplo/feedback/feedback.component';
import {FormExampleComponent} from '../app/form-input-reactive/formexample/formexample.component';
import {FormExampleFlexComponent} from '../app/form-input-reactive/formexampleflex/formexampleflex.component';
import {ApplicationVersionComponent} from './duplo/application-version/application-version.component';
import {ExampleButtonsComponent} from './ui/example-buttons/example-buttons.component';

// TODO IDSME Extract Routes to Seperate file.
// Recipe Shared Prod duplo routes
// Developer nows package he can go to that component as shared/release-notes will be a supported url. It will even change the the preferred whic is about/release-notes
export const routes: Routes = [
  {path: 'about', redirectTo: 'about/release-notes', pathMatch: 'full'}, // Redirect to correct url.
  {path: 'about/release-notes', component: ReleasenotesComponent},
  {path: 'shared/release-notes', redirectTo: 'about/release-notes', pathMatch: 'full'},
  {path: 'about/feedback', component: FeedbackComponent},
  {path: 'about/version', component: ApplicationVersionComponent},
  {path: 'about/formflex', component: FormExampleFlexComponent },
  {path: 'about/form', component: FormExampleComponent},
  {path: 'about/file-not-found', component: FileNotFoundComponent}, // Prod link
  {path: 'shared/file-not-found', redirectTo: 'about/file-not-found', pathMatch: 'full'}, // Debug link to see if redirection works
  {path: 'rn', component: ReleasenotesComponent}, // Short-cut link remove when going to prod.
  {path: 'fnf', component: FileNotFoundComponent}, // The direct link to see remove when going to prod.
  {path: 'router-link-tester', component: RouterLinkTesterComponent}, // Tired of testing routes that should work goto to this link and see all prod-links that should work.
  {path: 'config', component: ConfigComponent}, // Will show the config of the app.
  {path: 'about/buttons', component: ExampleButtonsComponent},
//  {path: '**', pathMatch: 'full', redirectTo: 'about/file-not-found'} Not working catches to much if activated
];
// Explicitly not here as '' does not work in ap-routing.ts { path: '**', redirectTo: 'about/file-not-found' } // Decide if page not found we show error or go to the home or results - overview page.


// Shared duplo development routes easy testing/debugging of components each component as all have a direct link
export const testRoutes: Routes = [
  {path: '', component: RouterLinkTesterComponent}, // Tired of testing routes that should work goto to this link
  {path: 'router-link-tester', component: RouterLinkTesterComponent}, // Tired of testing routes that should work goto to this link
  {path: 'config', component: ConfigComponent}, // Will show the config of the app.
  {path: 'release-notes', component: ReleasenotesComponent},
  {path: 'rn', component: ReleasenotesComponent},
  {path: 'file-not-found-root', component: FileNotFoundComponent},
  {path: '**', redirectTo: 'about/file-not-found'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}
