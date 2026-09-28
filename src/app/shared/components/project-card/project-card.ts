import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/portfolio.models';
import { Icon } from '../icon/icon';
import { Media } from '../media/media';
import { PadPipe } from '../../pipes/pad.pipe';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, Icon, Media, PadPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.is-wide]': 'wide()' },
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly index = input.required<number>();
  /** Spans the full grid row with a side-by-side layout on desktop. */
  readonly wide = input(false);

  protected readonly link = computed(() => ['/works', this.project().slug]);
}
