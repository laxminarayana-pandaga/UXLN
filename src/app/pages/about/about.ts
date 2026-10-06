import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  APPROACH_POINTS,
  CAPABILITIES,
  DELIVERY_CHAIN,
  INTRO,
  PROCESS,
  PROFILE,
  SNAPSHOT,
  TOOLS,
} from '../../data/portfolio.data';
import { EXPERIENCE } from '../../data/experience.data';
import { Icon, IconName } from '../../shared/components/icon/icon';
import { Media } from '../../shared/components/media/media';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { ExperienceTimeline } from '../../shared/components/experience-timeline/experience-timeline';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';
import { PadPipe } from '../../shared/pipes/pad.pipe';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Icon, Media, SectionHeading, ExperienceTimeline, ContactCta, PadPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly intro = INTRO;
  protected readonly snapshot = SNAPSHOT;
  protected readonly approachPoints = APPROACH_POINTS;
  protected readonly chain = DELIVERY_CHAIN;
  protected readonly process = PROCESS;
  protected readonly capabilities = CAPABILITIES;
  protected readonly tools = TOOLS;
  protected readonly experience = EXPERIENCE;
  protected readonly year = new Date().getFullYear();

  /** Presentation-only icon per capability group. */
  protected readonly capabilityIcons: Partial<Record<string, IconName>> = {
    ux: 'compass',
    ui: 'layers',
    frontend: 'code',
    product: 'flag',
  };

  /** Map process step titles to icon names */
  protected getIconForProcess(title: string): IconName {
    const iconMap: Record<string, IconName> = {
      'Discover': 'search',
      'Define': 'workflow',
      'Ideate': 'layers',
      'Design': 'layout',
      'Validate': 'mouse-pointer',
      'Deliver': 'braces',
    };
    return iconMap[title] || 'compass';
  }

  protected readonly sections = [
    { id: 'approach', label: 'Approach' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'tools', label: 'Tools' },
    { id: 'experience', label: 'Experience' },
  ];
}
