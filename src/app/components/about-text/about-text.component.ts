import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrl: './about-text.component.css',
})
export class AboutTextComponent implements OnInit {
  @Input()
  aboutTitle: string = '';
  @Input()
  aboutDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
