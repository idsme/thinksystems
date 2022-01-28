import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export type Aanheffing = {
  id: string,
  name: string
}
@Component({
  selector: 'app-formexample',
  templateUrl: './formexample.component.html',
  styleUrls: ['./formexample.component.scss']
})
export class FormExampleComponent implements OnInit {
  bsn = '';
  selectedAanhef = 'M';
  aanheffingen = [
    { id: 'M', name: 'Dhr.'} as Aanheffing,
    { id: 'V', name: 'Mevr.'} as Aanheffing
  ];
  voorletters = '';
  tussenvoegsel = '';

  achternaam = '';
  geboortedatum = "";
  aanmeldFormulier!: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.aanmeldFormulier = new FormGroup({
      'aanhef': new FormControl(),
      'voorletters': new FormControl(),
      'tussenvoegsel': new FormControl(),
      'achternaam': new FormControl(),
      'geboortedatum': new FormControl()
    });
  }
}
