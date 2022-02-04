import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ids-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() label = 'No Label Set';
  @Input() active = false;


  constructor() { }

  ngOnInit() {
  }

}
