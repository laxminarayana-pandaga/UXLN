import { Employer } from '../core/models/portfolio.models';

/**
 * Career history, most recent employer first.
 * Several organisations list overlapping titles — these are concurrent or
 * progressive titles within the same company, not sequential jobs.
 */
export const EXPERIENCE: readonly Employer[] = [
  {
    company: '7TechNIX LLC',
    location: 'United States',
    workplace: 'On-site',
    roles: [
      {
        title: 'User Experience Architect',
        start: { year: 2026, month: 2 },
        end: null,
        skills: ['UX Architecture', 'Information Architecture'],
      },
      {
        title: 'User Interface Engineer',
        start: { year: 2026, month: 1 },
        end: null,
      },
    ],
  },
  {
    company: 'Carelon Global Solutions India',
    location: 'Hyderabad, Telangana, India',
    roles: [
      {
        title: 'Assistant Manager — UX Designer',
        start: { year: 2024, month: 4 },
        end: { year: 2026, month: 2 },
      },
      {
        title: 'Lead UX Product Designer',
        start: { year: 2020, month: 4 },
        end: { year: 2026, month: 2 },
        summary:
          'Lead for Medicare and Medicaid clients, responsible for UX deliverables across internal products.',
        skills: ['UX Research', 'AngularJS', 'Product Design', 'UX/UI'],
      },
      {
        title: 'Associate',
        start: { year: 2020, month: 4 },
        end: { year: 2026, month: 1 },
      },
    ],
  },
  {
    company: 'CompuGain',
    roles: [
      {
        title: 'Sr. UX/UI Designer',
        start: { year: 2017, month: 7 },
        end: { year: 2020, month: 4 },
        summary:
          'Designed experiences for Bing across multiple canvases — researching and designing frameworks for answers and innovative experiences across multiple segments.',
        skills: ['UX Research', 'Interaction Design', 'Framework Design', 'Digital Experiences'],
      },
      {
        title: 'Sr. Full Stack UX/UI Designer',
        start: { year: 2017, month: 7 },
        end: { year: 2020, month: 4 },
      },
    ],
  },
  {
    company: 'Vertex Computer Systems',
    roles: [
      {
        title: 'Sr. UX / UI Designer',
        start: { year: 2016, month: 11 },
        end: { year: 2017, month: 7 },
        summary:
          'Partnered with sales and business teams to gather requirements and turn them into design deliverables.',
        highlights: [
          'Personas',
          'User journeys',
          'Prototypes',
          'UI & visual design',
          'Business presentations',
          'RFP designs',
          'Infographics',
        ],
      },
      {
        title: 'Senior User Interface Designer',
        start: { year: 2016, month: 11 },
        end: { year: 2017, month: 7 },
      },
    ],
  },
  {
    company: 'Smash Solutions',
    roles: [
      {
        title: 'Sr. UX / UI Designer',
        start: { year: 2012, month: 8 },
        end: { year: 2016, month: 10 },
        summary:
          'Designed websites, portals and web applications — from business requirement analysis and design strategy through to usability testing and design recommendations.',
        highlights: [
          'Concept visualisation',
          'Prototypes',
          'Wireframes',
          'Style guides',
          'Multimedia presentations',
          'Usability testing',
        ],
        skills: ['HTML', 'HTML5', 'XHTML', 'CSS', 'CSS3', 'Twitter Bootstrap'],
      },
    ],
  },
  {
    company: 'Pegasys Information Technologies Pvt Ltd',
    roles: [
      {
        title: 'Sr. UI Designer',
        start: { year: 2010, month: 6 },
        end: { year: 2012, month: 8 },
        summary:
          'Designed multiple websites, working directly with US clients on requirements and design updates.',
        highlights: [
          'Website design',
          'Page layout',
          'HTML conversion',
          'WordPress theme customisation',
          'WordPress & jQuery plugins',
        ],
      },
    ],
  },
  {
    company: 'Plexasys Solutions Private Limited',
    roles: [
      {
        title: 'Web Designer',
        start: { year: 2008, month: 6 },
        end: { year: 2010, month: 6 },
        summary:
          'Created frontend designs that were usable, accessible and understandable, working with programming teams to implement them.',
      },
    ],
  },
];
