import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: [
    './menu-bar.component.css',
    './menu-bar.responsive.component.css',
  ],
})
export class MenuBarComponent implements OnInit {
  [x: string]: any;
  @ViewChild('modeIcon') modeIcon!: ElementRef<SVGElement>;
  isMenuVisible: boolean = false;
  darkModeIconVisible = true;
  defaultThemeApplied = true;
  darkMode: boolean = false;

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.themeService.getThemeObservable().subscribe((isDarkMode: boolean) => {
      this.darkMode = isDarkMode;
      this.applyTheme(isDarkMode);
      this.updateCircleClass();
      this.updateCircleBackgroundClass();
      this.updateCloseMenuSvgClass();
    });

    const isLightModeActive = this.themeService.isLightModeActive();
    this.darkModeIconVisible = !isLightModeActive;
    this.updateCircleClass();
    this.updateCircleBackgroundClass();
    this.updateCloseMenuSvgClass();
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  closeMenu(): void {
    this.isMenuVisible = false;
  }

  toggleMode() {
    this.darkModeIconVisible = !this.darkModeIconVisible;
    this.themeService.setTheme(this.darkModeIconVisible);

    const svgIcon = document.getElementById('lightModeIcon') as HTMLElement;

    if (svgIcon) {
      svgIcon.classList.toggle(
        'night-mode-transition',
        this.darkModeIconVisible
      );
      svgIcon.classList.toggle(
        'light-mode-transition',
        !this.darkModeIconVisible
      );
    }

    const htmlElement = document.documentElement;
    if (htmlElement) {
      htmlElement.classList.toggle('night', this.darkModeIconVisible);
      htmlElement.classList.toggle('light', !this.darkModeIconVisible);
    }

    this.themeService.setTheme(this.darkModeIconVisible);
  }

  private updateCloseMenuSvgClass(): void {
    const closeMenuSvgElements =
      this['elementRef'].nativeElement.querySelectorAll('.burger-fill');

    closeMenuSvgElements.forEach((closeMenuSvgElement: HTMLElement) => {
      if (this.darkMode) {
        this.renderer.addClass(closeMenuSvgElement, 'night-burger');
        this.renderer.removeClass(closeMenuSvgElement, 'light-burger');
      } else {
        this.renderer.addClass(closeMenuSvgElement, 'light-burger');
        this.renderer.removeClass(closeMenuSvgElement, 'night-burger');
      }
    });
  }

  private updateCircleBackgroundClass(): void {
    const circleBgElement = document.getElementById('toggle-mode-bg');

    if (this.darkMode) {
      this.renderer.addClass(circleBgElement, 'night-bg');
      this.renderer.removeClass(circleBgElement, 'light-bg');
    } else {
      this.renderer.addClass(circleBgElement, 'light-bg');
      this.renderer.removeClass(circleBgElement, 'night-bg');
    }
  }

  private updateCircleClass(): void {
    const circleElement = document.getElementById('toggle-mode-circle');

    if (this.darkMode) {
      this.renderer.addClass(circleElement, 'night-circle');
      this.renderer.removeClass(circleElement, 'light-circle');
    } else {
      this.renderer.addClass(circleElement, 'light-circle');
      this.renderer.removeClass(circleElement, 'night-circle');
    }
  }

  private applyTheme(isDarkMode: boolean): void {
    const htmlElement = document.documentElement;
    if (htmlElement) {
      if (isDarkMode) {
        htmlElement.classList.add('night');
        htmlElement.classList.remove('light');
      } else {
        if (!htmlElement.classList.contains('night')) {
          htmlElement.classList.add('light');
        }
      }
    }
  }

  playTransitionAnimation() {
    const svgIcon = document.getElementById('lightModeIcon') as HTMLElement;

    if (svgIcon) {
      if (this.darkModeIconVisible) {
        svgIcon.classList.remove('night-mode-transition');
        svgIcon.classList.add('light-mode-transition');
      } else {
        svgIcon.classList.remove('light-mode-transition');
        svgIcon.classList.add('night-mode-transition');
      }
    }
  }

  playTransition() {
    const htmlElement = document.documentElement;
    if (htmlElement) {
      htmlElement.classList.add('transition');

      htmlElement.addEventListener(
        'transitionend',
        () => {
          htmlElement.classList.remove('transition');
        },
        { once: true }
      );
    }
  }
}
