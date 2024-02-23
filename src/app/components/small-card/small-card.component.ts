import {
  Component,
  Input,
  OnInit,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.responsive.component.css',
  ],
})
export class SmallCardComponent implements OnInit {
  @Input()
  elementDirection: string = '';
  @Input()
  photoCover: string = '';
  @Input()
  cardMargin: string = '';
  // @Input()
  // photoHeight: string = '200px';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
  @Input()
  Id: string = '0';
  originalText!: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.toggleTruncateTextClass();
  }

  ngAfterViewInit(): void {
    const paragraphElement =
      this.elementRef.nativeElement.querySelector('#paragraphText');
    if (paragraphElement) {
      this.originalText = paragraphElement.innerText.trim();
      this.toggleTruncateTextClass();
    }
  }

  toggleTruncateTextClass(): void {
    const paragraphElement =
      this.elementRef.nativeElement.querySelector('#paragraphText');
    if (!paragraphElement) return;

    const maxWidthForTruncation = 1024;
    const screenWidth = window.innerWidth;

    if (screenWidth > maxWidthForTruncation) {
      paragraphElement.classList.add('truncate-text');
      this.truncateText(paragraphElement);
    } else {
      paragraphElement.classList.remove('truncate-text');
      this.expandText(paragraphElement);
    }
  }

  truncateText(element: HTMLElement): void {
    const text = element.innerText;
    const maxLength = 150;
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
