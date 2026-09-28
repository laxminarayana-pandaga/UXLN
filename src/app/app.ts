import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SeoData } from './core/models/portfolio.models';
import { SeoService } from './core/services/seo.service';
import { SiteHeader } from './shared/components/site-header/site-header';
import { SiteFooter } from './shared/components/site-footer/site-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <app-site-header />
    <main id="main" tabindex="-1">
      <router-outlet />
    </main>
    <app-site-footer />
  `,
  styles: `
    main:focus {
      outline: none;
    }
  `,
})
export class App {
  constructor() {
    const router = inject(Router);
    const route = inject(ActivatedRoute);
    const seo = inject(SeoService);

    // Apply per-route SEO from route `data.seo`. Routes without it (e.g. case studies)
    // set their own metadata from within the page component.
    router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(() => {
        let current = route.snapshot;
        while (current.firstChild) current = current.firstChild;
        const data = current.data['seo'] as SeoData | undefined;
        if (data) seo.update(data);
      });
  }
}
