import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './input/input.component';
import {FormdebugComponent} from './formdebug/formdebug.component';

/**
 * Will only contain input's based on Angular Reactive Form's
 * @type {(AanhefComponent | AchternaamComponent | GeboortedatumComponent | InputComponent | TussenvoegselComponent | VoorlettersComponent | FormdebugComponent | FormExampleFlexComponent | FormExampleComponent)[]}
 */

export const COMPONENTS = [
  InputComponent,
  // TODO Refactor this to FORMS module as it can be used for template, reatice and material design forms.
  FormdebugComponent,
  // TODO Refactor This out as it only show how to use above Inputs, These form's a usage examples
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
