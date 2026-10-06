import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';

/** Closing call-to-action band shared by Home, About, Works and case studies. */
@Component({
  selector: 'app-contact-cta',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.is-card]': "variant() === 'card'" },
  template: `
    <section class="cta" aria-labelledby="cta-title">
      <div class="container cta__inner">
        <div class="cta__copy">
          <p class="eyebrow eyebrow--dot cta__eyebrow">Get in touch</p>
          <h2 id="cta-title" class="cta__title">Let's work together.</h2>
        </div>
        <div class="cta__actions">
          <a class="btn btn--inverse" routerLink="/contact">
            Let's connect <app-icon name="arrow-down-right" [size]="16" />
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact-cta.scss',
})
export class ContactCta {
  /** `band`: full-width dark strip (Home). `card`: contained dark panel (About). */
  readonly variant = input<'band' | 'card'>('band');
}
