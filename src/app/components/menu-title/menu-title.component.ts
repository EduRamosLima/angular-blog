import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css',
})
export class MenuTitleComponent implements OnInit {
  @Input()
  menuTitle: string = 'THE BLOG';
  @Input()
  fontSize: string = '220px';

  constructor() {}

  ngOnInit(): void {}
}
