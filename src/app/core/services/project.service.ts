import { Injectable } from '@angular/core';
import { Project } from '../models/portfolio.models';
import { FEATURED_PROJECTS, PROJECTS } from '../../data/projects.data';

export interface ProjectNeighbours {
  readonly previous: Project;
  readonly next: Project;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  readonly all = PROJECTS;
  readonly featured = FEATURED_PROJECTS;

  bySlug(slug: string): Project | undefined {
    return this.all.find((p) => p.slug === slug);
  }

  /** 1-based position used for the "01", "02"… labels. */
  indexOf(project: Project): number {
    return this.all.indexOf(project) + 1;
  }

  /** Previous and next projects, wrapping around the list. */
  neighbours(project: Project): ProjectNeighbours {
    const i = this.all.indexOf(project);
    const n = this.all.length;
    return {
      previous: this.all[(i - 1 + n) % n],
      next: this.all[(i + 1) % n],
    };
  }
}
