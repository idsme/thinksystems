import {Component, Input} from '@angular/core';
import {InputComponent} from '../input/input.component';
import { Aanheffing } from '../formexample/formexample.component';

@Component({
  selector: 'app-aanhef',
  templateUrl: './aanhef.component.html',
  styleUrls: ['./aanhef.component.scss']
})
export class AanhefComponent extends InputComponent {
  @Input()
  public dataList:  Aanheffing[] = [];
}
