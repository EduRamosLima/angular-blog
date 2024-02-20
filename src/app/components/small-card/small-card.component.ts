import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent implements OnInit {
  @Input()
  elementDirection: string = 'row';
  @Input()
  photoCover: string = '';
  @Input()
  photoHeight: string = '200px';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
