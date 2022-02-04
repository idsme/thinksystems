import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ids-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  printButtonText = '=> Print - View';
  printButtonActive = false;

  @Output()
  print = new EventEmitter<any>();

  @Input()
  monthName = "";

  @Input()
  consultantName = "";

  @Input()
  clientName = "";

  @Input()
  projectName = "";

  constructor() { }

  ngOnInit() {
  }

  clickedPrint() {
    this.print.emit();
    this.printButtonText = (this.printButtonText !== '=> Print - View') ? '=> Print - View' : '=> Web - View';
    this.printButtonActive = !this.printButtonActive;
//    window.print();
  }

}
