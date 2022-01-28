import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HoursmadeModule} from './site-section-hours-made/hoursmade.module';
import {SharedModule} from '../shared/shared.module';
import {FormInputReactiveModule} from './form-input-reactive/form-input-reactive.module';
import { RemoteEntryModule } from './remote-entry/entry.module';
import { PageSiteMapComponent } from './page-site-map/page-site-map.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PageSiteMapComponent
  ],
  imports: [
    FormInputReactiveModule,
    HoursmadeModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RemoteEntryModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
