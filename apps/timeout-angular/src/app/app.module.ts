import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HoursmadeModule} from './site-section-hours-made/hoursmade.module';
import {SharedModule} from '../shared/shared.module';
import { RemoteEntryModule } from './remote-entry/entry.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
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
