/* Plaats hier modules/componenten en services die in de hele app beschikbaar moeten zijn*/

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ApplicationVersionComponent} from './duplo/application-version/application-version.component';

import {FeedbackComponent} from './duplo/feedback/feedback.component';
import {SharedRoutingModule} from './shared-routing.module';

import {PageRouterLinkTesterComponent} from './duplo/page-router-link-tester/page-router-link-tester.component';
import {MasterDataService} from './masterdata.service';

import {FeedBackService} from './duplo/feedback/feedback.service';
import {HttpClientModule} from '@angular/common/http';
import { EntriesPipe } from './pipes/entries.pipe';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { InputComponent } from './forms/input/input.component';

/**
 * If a component could be re-used by another web-site it goes in Shared Moduless
 * If 3 Components are in Shared of the Same Type and you have a Fourth..
 * Add it to Shared and Inform the Lead dev. He is responsible for the creation of new modules.
 *
 * @type {(HeaderComponent | HeaderImageComponent | ContentComponent | FooterComponent | ApplicationVersionComponent |
 *     PageRouterLinkTesterComponent | AngularFlexLayoutComponent | FeedbackComponent | ConfigComponent | ReleasenotesComponent
 *     | FileNotFoundComponent | StyleguideComponent)[]}
 */

export const COMPONENTS = [

    ApplicationVersionComponent,

    PageRouterLinkTesterComponent, FeedbackComponent,

    IconButtonComponent, InputComponent,

    EntriesPipe];

export const MODULES = [CommonModule, HttpClientModule, //  If we add this Error pop's up in the console. ReactiveFormsModule
    FormsModule, ReactiveFormsModule, RouterModule,];

export const COMPONENT_PLUS_MODULES = [...COMPONENTS, MODULES];


@NgModule({
    imports: [MODULES, SharedRoutingModule],
    declarations: COMPONENTS,
    providers: [MasterDataService, FeedBackService],
    exports: COMPONENT_PLUS_MODULES,
})
export class SharedModule {
}
