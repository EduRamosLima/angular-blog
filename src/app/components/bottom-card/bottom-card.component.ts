import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-bottom-card',
  templateUrl: './bottom-card.component.html',
  styleUrls: [
    './bottom-card.component.css',
    './bottom-card.responsive.component.css',
  ],
})
export class BottomCardComponent implements OnInit {
  @Input()
  elementDirection: string = '';
  @Input()
  photoCover: string = '';
  @Input()
  photoHeight: string = '';
  @Input()
  photoMaxHeight: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
  @Input()
  Id: string = '0';
  originalText!: string;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleTruncateTextClass();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const paragraphElement =
        this.elementRef.nativeElement.querySelector('#paragraphText');
      if (paragraphElement) {
        this.originalText = paragraphElement.innerText.trim();
        this.toggleTruncateTextClass();
      }
    }
  }

  toggleTruncateTextClass(): void {
    if (isPlatformBrowser(this.platformId)) {
      const paragraphElement =
        this.elementRef.nativeElement.querySelector('#paragraphText');
      if (!paragraphElement) return;

      const maxWidthForTruncation = 280;
      const screenWidth = window.innerWidth;

      if (screenWidth > maxWidthForTruncation) {
        paragraphElement.classList.add('truncate-text');
        this.truncateText(paragraphElement);
      } else {
        paragraphElement.classList.remove('truncate-text');
        this.expandText(paragraphElement);
      }
    }
  }

  truncateText(element: HTMLElement): void {
    const text = element.innerText;
    const maxLength = 400;
    if (text.length > maxLength) {
      element.dataset['originalText'] = text;
      element.innerText = text.substring(0, maxLength) + '...';
    }
  }

  expandText(element: HTMLElement): void {
    element.innerText = this.originalText;
  }

  ngOnInit(): void {}
}
