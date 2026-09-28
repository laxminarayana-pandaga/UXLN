import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Consistent section header: eyebrow, large uppercase title and an optional
 * right-aligned slot (project `[slot=aside]` content for links or supporting copy).
 */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="heading">
      <p class="eyebrow">
        @if (index()) {
          <span class="index">({{ index() }})</span>
        }
        {{ eyebrow() }}
      </p>
      <h2 [id]="headingId()" class="title-xl">{{ title() }}</h2>
    </div>
    <div class="aside">
      <ng-content select="[slot=aside]" />
    </div>
  `,
  styleUrl: './section-heading.scss',
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly index = input<string>();
  readonly headingId = input<string>();
}
