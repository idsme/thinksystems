import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HoursmadeModule} from './hoursmade/hoursmade.module';
import {SharedModule} from '../shared/shared.module';
import {FormInputReactiveModule} from './form-input-reactive/form-input-reactive.module';
import { RemoteEntryModule } from './remote-entry/entry.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormInputReactiveModule,
    HoursmadeModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RemoteEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
