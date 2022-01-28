import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {

  public showComment = true;
  selectedValue = "";

  foods = [
    {value: 'steak-0', viewValue: 'Steak', selected: false},
    {value: 'pizza-1', viewValue: 'Recipe', selected: true},
    {value: 'tacos-2', viewValue: 'Tacos', selected: false},
    {value: 'tapas-3', viewValue: 'Tapas', selected: false},
    {value: 'fries', viewValue: 'fries', selected: false}
  ];

  color = "";

  availableColors = [
    {name: 'none', color: ''},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  // Begin short-header example
  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];

  sortedData;

  // End short-header example

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  ngOnInit() {
  }

}

