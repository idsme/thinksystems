/* Plaats hier modules/componenten en services die in de hele app beschikbaar moeten zijn*/

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ContentComponent} from './layout/content.component';
import {ApplicationVersionComponent} from './duplo/application-version/application-version.component';
import {ReleasenotesComponent} from './layout/releasenotes/releasenotes.component';
import {StyleguideComponent} from './layout/styleguide/styleguide.component';
import {FooterComponent} from './layout/footer.component';
import {HeaderComponent} from './layout/header.component';

import {AngularFlexLayoutComponent} from '../app/angularflexlayout.component';
import {FeedbackComponent} from './duplo/feedback/feedback.component';
// Feedback component contains great example code removed angular-star-rating from the package.json import
// {StarRatingModule} from 'angular-star-rating';
import {ConfigComponent} from './duplo/config/config.component';
import {HeaderImageComponent} from './layout/header-image/header-image.component';
import {FileNotFoundComponent} from './duplo/file-not-found/file-not-found.component';
import {SharedRoutingModule} from './shared-routing.module';

import {RouterLinkTesterComponent} from './duplo/router-link-tester/router-link-tester.component';
import {ConfigService} from './duplo/config/config.service';
import {MasterDataService} from './duplo/masterdata/masterdata.service';

import {FeedBackService} from './duplo/feedback/feedback.service';
import {HttpClientModule} from '@angular/common/http';
import {FormInputReactiveModule} from '../app/form-input-reactive/form-input-reactive.module';
import {ButtonPrimairyComponent} from './ui/button-primairy/button-primairy.component';
import {ExampleButtonsComponent} from './ui/example-buttons/example-buttons.component';
import {IconButtonComponent} from './ui/icon-button/icon-button.component';
import {IconButtonAlternativeComponent} from './ui/icon-button-alternative/icon-button-alternative.component';
import { ButtonAlternativeComponent } from './ui/button-alternative/button-alternative.component';
import { ButtonComponent } from './ui/button.component';
import { EntriesPipe } from './pipes/entries.pipe';

/**
 * If a component could be re-used by another web-site it goes in Shared Moduless
 * If 3 Components are in Shared of the Same Type and you have a Fourth..
 * Add it to Shared and Inform the Lead dev. He is responsible for the creation of new modules.
 *
 * @type {(HeaderComponent | HeaderImageComponent | ContentComponent | FooterComponent | ApplicationVersionComponent |
 *     RouterLinkTesterComponent | AngularFlexLayoutComponent | FeedbackComponent | ConfigComponent | ReleasenotesComponent
 *     | FileNotFoundComponent | StyleguideComponent)[]}
 */

export const COMPONENTS = [HeaderComponent, HeaderImageComponent,

    ContentComponent, FooterComponent, ApplicationVersionComponent,

    RouterLinkTesterComponent, AngularFlexLayoutComponent, FeedbackComponent, ConfigComponent, ReleasenotesComponent, FileNotFoundComponent,

    StyleguideComponent, ButtonPrimairyComponent, ExampleButtonsComponent,

    IconButtonComponent, IconButtonAlternativeComponent, ButtonAlternativeComponent, ButtonComponent,

    EntriesPipe];

export const MODULES = [CommonModule, HttpClientModule, //  If we add this Error pop's up in the console. ReactiveFormsModule
    FormsModule, ReactiveFormsModule, RouterModule,];

export const COMPONENT_PLUS_MODULES = [...COMPONENTS, MODULES];


@NgModule({
    imports: [MODULES, SharedRoutingModule, FormInputReactiveModule],
    declarations: COMPONENTS,
    providers: [ConfigService, MasterDataService, FeedBackService],
    exports: COMPONENT_PLUS_MODULES,
})
export class SharedModule {
}
