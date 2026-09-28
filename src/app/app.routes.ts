import { Routes } from '@angular/router';
import { SeoData } from './core/models/portfolio.models';
import { PROFILE, YEARS_OF_EXPERIENCE } from './data/portfolio.data';

const name = PROFILE.name;

const seo = (data: SeoData) => ({ seo: data });

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: seo({
      title: `${name} — UX Designer, UI Designer & Frontend Developer`,
      description: `${name} is a UX/UI Designer and Frontend Developer with ${YEARS_OF_EXPERIENCE} years of experience creating digital experiences across enterprise, healthcare, web and product environments.`,
      type: 'profile',
    }),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    data: seo({
      title: `About — ${name}`,
      description: `Background, approach, capabilities and ${YEARS_OF_EXPERIENCE} years of career history across UX, UI and frontend development.`,
      type: 'profile',
    }),
  },
  {
    path: 'works',
    loadComponent: () => import('./pages/works/works').then((m) => m.Works),
    data: seo({
      title: `Works — ${name}`,
      description:
        'Selected case studies across enterprise healthcare, search, pre-sales design and web — spanning research, UX, UI and frontend.',
    }),
  },
  {
    // SEO for case studies is set by the component from project data.
    path: 'works/:slug',
    loadComponent: () => import('./pages/work-detail/work-detail').then((m) => m.WorkDetail),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    data: seo({
      title: `Contact — ${name}`,
      description:
        'Get in touch about UX, UI, product design, frontend collaboration or professional opportunities.',
    }),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    data: seo({
      title: `Page not found — ${name}`,
      description: 'The page you are looking for does not exist.',
    }),
  },
];
