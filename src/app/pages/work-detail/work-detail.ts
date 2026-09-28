import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { SeoService } from '../../core/services/seo.service';
import { PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/components/icon/icon';
import { Media } from '../../shared/components/media/media';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';
import { PadPipe } from '../../shared/pipes/pad.pipe';

/** Reusable case-study template — every project renders through this one component. */
@Component({
  selector: 'app-work-detail',
  imports: [RouterLink, Icon, Media, ContactCta, PadPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './work-detail.html',
  styleUrl: './work-detail.scss',
})
export class WorkDetail {
  private readonly projects = inject(ProjectService);
  private readonly seo = inject(SeoService);

  /** Bound from the `:slug` route param via `withComponentInputBinding()`. */
  readonly slug = input.required<string>();

  protected readonly project = computed(() => this.projects.bySlug(this.slug()));
  protected readonly number = computed(() => {
    const p = this.project();
    return p ? this.projects.indexOf(p) : 0;
  });
  protected readonly galleryPending = computed(
    () => this.project()?.gallery.some((item) => !item.src) ?? false,
  );
  protected readonly neighbours = computed(() => {
    const p = this.project();
    return p ? this.projects.neighbours(p) : null;
  });

  constructor() {
    effect(() => {
      const p = this.project();
      this.seo.update(
        p
          ? {
              title: `${p.title} — Case Study · ${PROFILE.name}`,
              description: p.summary,
              type: 'article',
            }
          : {
              title: `Project not found — ${PROFILE.name}`,
              description: 'This case study could not be found.',
            },
      );
    });
  }
}
