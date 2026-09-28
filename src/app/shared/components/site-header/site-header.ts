import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DOCUMENT,
  effect,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NAV_LINKS, PROFILE } from '../../../data/portfolio.data';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-scrolled]': 'scrolled()',
    '[class.is-open]': 'menuOpen()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly links = NAV_LINKS;
  protected readonly name = PROFILE.name;
  protected readonly linkedIn = PROFILE.linkedIn.url;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  private readonly document = inject(DOCUMENT);

  constructor() {
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(() => this.closeMenu());

    // Lock page scroll while the mobile menu is open.
    effect(() => {
      this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onScroll(): void {
    this.scrolled.set(this.document.defaultView!.scrollY > 8);
  }
}
