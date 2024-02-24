import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.responsive.component.css'],
})
export class AppComponent {
  title = 'angular-blog';
  isFixed = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollHeight = window.scrollY;
    const threshold = 400;

    this.isFixed = scrollHeight > threshold;
  }
}
