import {Component, Input} from '@angular/core';

/**
 * Button based on link so we canperform an action action and navigate to a certain location.
 * TODO IDSME Needs to be upgraded to using router link.
 */

@Component({
  selector: 'cp-button',
  template: `
    <a href="{{location}}">
      <span class="icon-left-open"></span>
      <span>{{buttonText}}</span>
    </a>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input()
  id!: string;

  @Input()
  buttonText!: string;

  @Input()
  location!: string;

  constructor() {
  }

}
