import { ChangeDetectionStrategy, Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS, PROFILE } from '../../../data/portfolio.data';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  private readonly document = inject(DOCUMENT);

  protected readonly profile = PROFILE;
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();

  protected backToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0 });
    this.document.getElementById('main')?.focus({ preventScroll: true });
  }
}
