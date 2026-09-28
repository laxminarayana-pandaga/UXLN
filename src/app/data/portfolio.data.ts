import {
  CapabilityGroup,
  ProcessStep,
  Profile,
  SnapshotItem,
} from '../core/models/portfolio.models';
import { yearsSince } from '../core/utils/date.utils';
import { EXPERIENCE } from './experience.data';

const CAREER_START = { year: 2008, month: 6 } as const;

/** Whole years since the first role (Jun 2008). Rendered as "18+". */
export const YEARS_OF_EXPERIENCE = `${yearsSince(CAREER_START)}+`;

export const PROFILE: Profile = {
  name: 'Laxminarayana Pandaga',
  shortName: 'L. Pandaga',
  roles: ['UX Designer', 'UI Designer', 'Frontend Developer'],
  headline: 'Designing meaningful digital experiences',
  headlineSuffix: `with ${YEARS_OF_EXPERIENCE} years of experience.`,
  summary:
    'From user experience and interface design to frontend implementation, I bridge design thinking and technology to create usable, scalable digital products.',
  currentRole: 'User Experience Architect at 7TechNIX LLC',
  careerStart: CAREER_START,
  portrait: {
    alt: 'Portrait of Laxminarayana Pandaga',
    hint: '/assets/images/portrait.jpg',
  },
  contact: {
    // TODO: Replace with the real email address.
    email: { text: 'YOUR_EMAIL@example.com', isPlaceholder: true },
    // TODO: Replace with the real city.
    location: { text: 'YOUR_CITY, INDIA', isPlaceholder: true },
  },
  linkedIn: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/laxminarayana-pandaga/',
    handle: 'in/laxminarayana-pandaga',
  },
};

export const SNAPSHOT: readonly SnapshotItem[] = [
  {
    value: YEARS_OF_EXPERIENCE,
    label: 'Years',
    detail: 'UX · UI · Web Design · Frontend',
    tag: 'Timeline',
  },
  {
    value: String(EXPERIENCE.length),
    label: 'Organisations',
    detail: 'Healthcare · Search · Web · Digital Products',
    tag: 'Scale',
  },
  {
    value: 'End-to-end',
    label: 'Design to Development',
    detail: 'Research · UX · UI · Prototyping · HTML/CSS · Frontend',
    tag: 'Craft',
  },
];

export const INTRO: readonly string[] = [
  `I'm a UX architect and designer with ${YEARS_OF_EXPERIENCE} years of experience across user research, interface design and frontend development — from web design studios to enterprise healthcare and search.`,
  'I work best where problems are complex and teams are cross-functional. I bring a resourceful, flexible approach, a constant drive to learn, and a habit of turning what I learn into better outcomes for the people I design for and the organisations I work with.',
];

export const APPROACH_POINTS: readonly string[] = [
  'Working across departments and cross-functional teams',
  'Collaborating closely with engineers and development teams',
  'Resolving technical issues and implementing technical enhancements',
  'Shipping design and functional enhancements',
  'Monitoring site statistics and search engine optimisation',
  'Translating business requirements into usable digital experiences',
];

export const DELIVERY_CHAIN: readonly string[] = ['Business', 'UX', 'UI', 'Engineering', 'Delivery'];

export const PROCESS: readonly ProcessStep[] = [
  { title: 'Understand', description: 'Business goals, constraints and requirements.' },
  { title: 'Research', description: 'Users, context, personas and journeys.' },
  { title: 'Structure', description: 'Information architecture, navigation and flows.' },
  { title: 'Design', description: 'Wireframes through to high-fidelity UI.' },
  { title: 'Prototype', description: 'Interactive concepts to test ideas early.' },
  { title: 'Build', description: 'Frontend implementation alongside engineering.' },
  { title: 'Validate', description: 'Usability testing, iteration and recommendations.' },
];

export const CAPABILITIES: readonly CapabilityGroup[] = [
  {
    id: 'ux',
    title: 'UX Design',
    summary: 'Understanding people and structuring complexity.',
    items: [
      'User Research',
      'Personas',
      'User Journeys',
      'Information Architecture',
      'Site Navigation',
      'User Flows',
      'Wireframes',
      'Prototyping',
      'Usability Testing',
      'Interaction Design',
    ],
  },
  {
    id: 'ui',
    title: 'UI Design',
    summary: 'Clear, consistent and responsive interfaces.',
    items: [
      'Visual Design',
      'High-Fidelity Mockups',
      'Responsive Design',
      'Design Systems',
      'Style Guides',
      'Layout Design',
      'Web & Mobile UI',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Designs that survive contact with the browser.',
    items: [
      'HTML / HTML5',
      'CSS / CSS3',
      'XHTML',
      'Bootstrap',
      'JavaScript',
      'jQuery',
      'Responsive Development',
      'Cross-browser Compatibility',
    ],
  },
  {
    id: 'product',
    title: 'Product & Delivery',
    summary: 'Connecting business intent to shipped work.',
    items: [
      'Business Requirement Analysis',
      'Design Strategy',
      'Concept Development',
      'Validation',
      'Iteration',
      'RFP Design',
      'Business Presentations',
      'Developer Collaboration',
    ],
  },
];

export const TOOLS: readonly string[] = [
  'HTML',
  'HTML5',
  'CSS',
  'CSS3',
  'Bootstrap',
  'JavaScript',
  'jQuery',
  'AngularJS',
  'Adobe Photoshop',
  'WordPress',
  'Joomla',
  'Drupal',
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Works', path: '/works' },
  { label: 'Contact', path: '/contact' },
] as const;
