import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoData } from '../models/portfolio.models';

const SITE_NAME = 'Lakshmi Narayana Pandaga';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update({ title, description, image, type = 'website' }: SeoData): void {
    const url = this.document.location?.href ?? '';

    this.title.setTitle(title);
    this.setName('description', description);
    this.setProperty('og:site_name', SITE_NAME);
    this.setProperty('og:title', title);
    this.setProperty('og:description', description);
    this.setProperty('og:type', type);
    this.setProperty('og:url', url);
    this.setName('twitter:card', image ? 'summary_large_image' : 'summary');
    this.setName('twitter:title', title);
    this.setName('twitter:description', description);

    if (image) {
      this.setProperty('og:image', image);
    } else {
      this.meta.removeTag("property='og:image'");
    }
  }

  private setName(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }
}
