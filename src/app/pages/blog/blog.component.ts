import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { dataFake } from '../../data/dataFake';
import { SafeHtmlPipe } from '../../safe-html.pipe';

interface BlogSection {
  type: string;
  text?: string;
  src?: string;
  class?: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css', './blog.responsive.component.css'],
})
export class BlogComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  // contentDescription: SafeHtml[] = [];
  contentDescription: BlogSection[] = [];
  errorMessage: string = '';
  currentRouteId: string | null = null;
  private id: string | null = '0';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.setValuesToComponent(this.id);
    });

    this.updateCurrentRouteId();
  }

  private updateCurrentRouteId(): void {
    this.currentRouteId = this.route.snapshot.paramMap.get('id');
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find((article) => article.id === id);

    if (result) {
      this.contentTitle = result.title;
      if (Array.isArray(result.description)) {
        this.contentDescription = result.description.map((section: any) => {
          if (
            (section && section.type === 'paragraph') ||
            section.type === 'hr'
          ) {
            return {
              type: section.type,
              text: section.text,
              class: section.class,
            };
          } else if (section && section.type === 'image') {
            return { type: 'image', src: section.src, class: section.class };
          } else {
            return {
              type: 'heading',
              text: section.text,
              class: section.class,
            };
          }
        });
      } else {
        this.contentDescription = [
          { type: 'paragraph', text: result.description },
        ];
      }

      this.photoCover = result.photo;
    } else {
      this.errorMessage = 'Blog post not found';
    }
  }
}
