import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Employer } from '../../../core/models/portfolio.models';
import {
  earliest,
  formatDuration,
  formatRange,
  latest,
  monthsBetween,
} from '../../../core/utils/date.utils';
import { Icon } from '../icon/icon';

interface TimelineEntry {
  readonly employer: Employer;
  readonly period: string;
  readonly startYear: number;
  readonly endLabel: string;
  readonly tenure: string;
  readonly isCurrent: boolean;
  readonly place: string;
  readonly tags: readonly string[];
  readonly roles: readonly {
    readonly title: string;
    readonly range: string;
    readonly isCurrent: boolean;
    readonly summary?: string;
  }[];
}

@Component({
  selector: 'app-experience-timeline',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.scss',
})
export class ExperienceTimeline {
  readonly employers = input.required<readonly Employer[]>();

  protected readonly entries = computed<TimelineEntry[]>(() =>
    this.employers().map((employer) => {
      const start = earliest(employer.roles.map((r) => r.start));
      const end = latest(employer.roles.map((r) => r.end));
      return {
        employer,
        period: formatRange(start, end),
        startYear: start.year,
        endLabel: end ? String(end.year) : 'Now',
        tenure: formatDuration(monthsBetween(start, end)),
        isCurrent: end === null,
        place: [employer.location, employer.workplace].filter(Boolean).join(' · '),
        tags: [
          ...new Set(employer.roles.flatMap((r) => [...(r.highlights ?? []), ...(r.skills ?? [])])),
        ],
        roles: employer.roles.map((role) => ({
          title: role.title,
          range: formatRange(role.start, role.end),
          isCurrent: role.end === null,
          summary: role.summary,
        })),
      };
    }),
  );
}
