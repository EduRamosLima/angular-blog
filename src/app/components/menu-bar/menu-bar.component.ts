import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: [
    './menu-bar.component.css',
    './menu-bar.responsive.component.css',
  ],
})
export class MenuBarComponent {
  @ViewChild('modeIcon') modeIcon!: ElementRef<SVGElement>;
  isMenuVisible: boolean = false;
  darkModeIconVisible = true;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  closeMenu(): void {
    this.isMenuVisible = false;
  }

  toggleMode() {
    const htmlElement = document.documentElement;

    localStorage.setItem('dark-mode', JSON.stringify(this.darkModeIconVisible));
    this.playTransitionAnimation();

    if (this.darkModeIconVisible) {
      this.darkModeIconVisible = false;

      htmlElement?.classList.add('night');
      localStorage.setItem('dark-mode', 'true');
    } else {
      this.darkModeIconVisible = true;

      htmlElement?.classList.remove('night');
      localStorage.setItem('dark-mode', 'false');
    }
  }

  playTransitionAnimation() {
    const svgIcon = this.modeIcon.nativeElement;
    if (svgIcon) {
      svgIcon.classList.toggle('night-mode-transition');
    }
  }
}
