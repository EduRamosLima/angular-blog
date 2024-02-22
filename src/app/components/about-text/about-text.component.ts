import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: [
    './about-text.component.css',
    './about-text.responsive.component.css',
  ],
})
export class AboutTextComponent implements OnInit {
  @Input()
  aboutTitle: string = '';
  @Input()
  aboutDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
