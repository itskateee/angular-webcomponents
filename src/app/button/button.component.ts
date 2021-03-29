import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log('button clicked');
    this.valueChanged.emit('Hello, this is an emit');
  }
}
