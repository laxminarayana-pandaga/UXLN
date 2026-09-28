import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container missing">
        <p class="eyebrow">404</p>
        <h1 class="display">Page not found.</h1>
        <p class="lead">The page you're looking for doesn't exist or may have moved.</p>
        <a class="btn btn--primary" routerLink="/">
          Back to home <app-icon name="arrow-right" [size]="16" />
        </a>
      </div>
    </section>
  `,
  styles: `
    .missing {
      display: grid;
      gap: var(--space-5);
      justify-items: start;
      min-height: 50vh;
      align-content: center;
    }
  `,
})
export class NotFound {}
