import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { CAPABILITIES, INTRO, PROFILE, SNAPSHOT } from '../../data/portfolio.data';
import { Icon } from '../../shared/components/icon/icon';
import { Media } from '../../shared/components/media/media';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';
import { PadPipe } from '../../shared/pipes/pad.pipe';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, Media, ProjectCard, SectionHeading, ContactCta, PadPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly projects = inject(ProjectService);

  protected readonly profile = PROFILE;
  protected readonly snapshot = SNAPSHOT;
  protected readonly intro = INTRO[0];
  protected readonly capabilities = CAPABILITIES;
  protected readonly featured = this.projects.featured;
  protected readonly year = new Date().getFullYear();
  protected readonly initials = PROFILE.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  protected indexOf = this.projects.indexOf.bind(this.projects);
}
