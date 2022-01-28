import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validator, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AbstractForm } from '../../../shared/layout/forms/abstract-form';

// TODO IDSME when gettings this data via the api from a single object all the variables are not used as we can use {{(personaldata | async).achterNaam}} etc.
@Component({
  selector: 'app-formexample-flex',
  templateUrl: './formexampleflex.component.html',
  styleUrls: ['./formexampleflex.component.scss']
})
export class FormExampleFlexComponent extends AbstractForm implements OnInit {

  // Test values of components so we don't have to fill in.
  aanhef = 'M';
  aanheffingen = [
    { id: 'M', name: 'Dhr.'},
    { id: 'V', name: 'Mevr.'}
  ];
  tussenVoegsel = 'van';
  initialen = 'I';
  achterNaam = 'Achterhof';
  geboorteDag = '16';
  geboorteMaand = '04';
  geboorteJaar = '1974';
  telefoonNummer = '0641396022';
  emailAdres = 'idssells@gmail.com'

  constructor(private fb: FormBuilder) {
    super();
  }


  ngOnInit() {

    // Initialized the form
   this.form = this.fb.group({
      aanhef: [this.aanhef, [Validators.pattern('[a-zA-Z ]*')]],
      initialen: [this.initialen, [Validators.pattern('[a-zA-Z ]*')]],
      tussenVoegsel: [this.tussenVoegsel, [Validators.pattern('[a-zA-Z ]*')]],
      achterNaam: [this.achterNaam, Validators.pattern('[a-zA-Z ]*')],
      geboorteDag: [this.geboorteDag, [Validators.pattern('[0-9]*'), Validators.min(1), Validators.max(31)]],
      geboorteMaand: [this.geboorteMaand, [Validators.pattern('[0-9]*'), Validators.min(1), Validators.max(12)]],
      geboorteJaar: [this.geboorteJaar, [Validators.pattern('[0-9]*'), Validators.min(1900), Validators.max(3000)]],
      telefoonNummer: [this.telefoonNummer, [Validators.pattern('[+]?[0-9]*'), Validators.maxLength(12), Validators.minLength(10)]],
      emailAdres: [this.emailAdres, Validators.email]
    });

    console.log('2.1', this.form);

    this.onLoading();
  }

  loading() {
    console.log('LOADING SOME DATA OVERRIDE THIS IMPL to load Data into the from.');
    // Load some data from the service fill the member vars.
  }

  submit() {
    console.log('Submitting SOME DATA OVERRIDE THIS IMPL to load Data into the from.');
  }
}


