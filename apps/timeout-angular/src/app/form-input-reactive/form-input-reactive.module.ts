import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VoorlettersComponent} from './voorletters/voorletters.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GeboortedatumComponent} from './geboortedatum/geboortedatum.component';
import {AanhefComponent} from './aanhef/aanhef.component';
import {TussenvoegselComponent} from './tussenvoegsel/tussenvoegsel.component';
import {AchternaamComponent} from './achternaam/achternaam.component';
import {InputComponent} from './input/input.component';
import {FormExampleFlexComponent} from './formexampleflex/formexampleflex.component';
import {FormExampleComponent} from './formexample/formexample.component';
import {FormdebugComponent} from './formdebug/formdebug.component';

/**
 * Will only contain input's based on Angular Reactive Form's
 * @type {(AanhefComponent | AchternaamComponent | GeboortedatumComponent | InputComponent | TussenvoegselComponent | VoorlettersComponent | FormdebugComponent | FormExampleFlexComponent | FormExampleComponent)[]}
 */

export const COMPONENTS = [
  AanhefComponent,
  AchternaamComponent,
  GeboortedatumComponent,
  InputComponent,
  TussenvoegselComponent,
  VoorlettersComponent,

  // TODO Refactor this to FORMS module as it can be used for template, reatice and material design forms.
  FormdebugComponent,

  // TODO Refactor This out as it only show how to use above Inputs, These form's a usage examples
  FormExampleFlexComponent,
  FormExampleComponent
];

export const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

export const COMPONENT_PLUS_MODULES = [...COMPONENTS, MODULES];


@NgModule({
  imports: [MODULES
  ],
  declarations: COMPONENTS,
  providers: [],

  // TODO IDSME export only components not modules... Encapsulation Pattern or Export used modules so you can create func like this in your app.
  exports: COMPONENT_PLUS_MODULES,
})
export class FormInputReactiveModule { }
