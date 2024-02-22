import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: [
    './medium-card.component.css',
    './medium-card.responsive.component.css',
  ],
})
export class MediumCardComponent implements OnInit {
  @Input()
  photoCover: string = '';
  // @Input()
  // photoHeight: string = '240px';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
  @Input()
  Id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
