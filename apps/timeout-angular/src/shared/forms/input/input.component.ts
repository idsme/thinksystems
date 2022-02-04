  import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  /*
  * Base class for all other components which need the same functionality.
  * */
  @Input('group')
  public group!: FormGroup;

  @Input()
  placeholder!: string;

  @Input()
  controlName!: string;

  @Input()
  id!: string;

  @Input()
  value!: string;


}
