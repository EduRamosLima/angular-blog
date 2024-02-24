import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'dark-mode';
  private themeSubject: BehaviorSubject<boolean>;
  private themeResolved: boolean = false;

  constructor() {
    const initialTheme = this.getInitialTheme();
    this.themeSubject = new BehaviorSubject<boolean>(initialTheme);
    this.themeResolved = true;
  }

  private getInitialTheme(): boolean {
    if (typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem(this.THEME_KEY);
      return storedTheme ? JSON.parse(storedTheme) : false;
    } else {
      return false;
    }
  }

  getTheme(): boolean {
    return this.themeSubject.value;
  }

  setTheme(isDarkMode: boolean): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, JSON.stringify(isDarkMode));
      this.themeSubject.next(isDarkMode);
    }
  }

  toggleTheme(): void {
    const currentTheme = this.getTheme();
    this.setTheme(!currentTheme);
  }

  getThemeObservable(): Observable<boolean> {
    return this.themeSubject.asObservable();
  }

  isThemeResolved(): boolean {
    return this.themeResolved;
  }

  isLightModeActive(): boolean {
    const htmlElement = document.documentElement;
    return htmlElement.classList.contains('light');
  }
}
