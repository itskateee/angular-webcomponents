import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CounterComponent implements OnInit {
  @Input() value: number = 0;
  constructor() {}

  ngOnInit() {}
}
