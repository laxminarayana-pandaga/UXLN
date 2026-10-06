import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';
import { PadPipe } from '../../shared/pipes/pad.pipe';

@Component({
  selector: 'app-works',
  imports: [ProjectCard, ContactCta, PadPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section works" aria-labelledby="works-title">
        <header class="works__header">
        <div class="container">
          <p class="eyebrow">Works <span class="muted">({{ projects.length | pad }})</span></p>
          <h1 id="works-title" class="display">Good products start with a good conversation.</h1>
          <p class="lead">
            Case studies from enterprise healthcare, search, pre-sales design and web — spanning
            research, UX, UI and frontend.
          </p>
          </div>
        </header>

        <div class="works__grid">
        <div class="container">
          @for (project of projects; track project.slug; let i = $index) {
            <app-project-card [project]="project" [index]="i + 1" [wide]="i === 0" />
          }
        </div>
      </div>
    </section>

    <app-contact-cta />
  `,
  styleUrl: './works.scss',
})
export class Works {
  protected readonly projects = inject(ProjectService).all;
}
