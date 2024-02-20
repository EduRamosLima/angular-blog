import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrl: './medium-card.component.css',
})
export class MediumCardComponent implements OnInit {
  @Input()
  photoCover: string = '';
  @Input()
  photoHeight: string = '240px';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
