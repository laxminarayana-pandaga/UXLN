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
  name: 'Lakshmi Narayana Pandaga',
  shortName: 'L. Pandaga',
  roles: ['Sr. UX architect / Product Designer'],
  headline: 'I turn complex problems into simple experiences.',
  headlineSuffix: ``,
  // headlineSuffix: `with ${YEARS_OF_EXPERIENCE} years of experience.`,
  summary: 'Im a Sr. UX architect / Product Designer with 18+ years of experience across user research, interface design and frontend development — from web design studios to enterprise healthcare and search.',
  currentRole: 'Sr. UX architect / Product Designer at 7TechNIX LLC',
  careerStart: CAREER_START,
  portrait: {
    src: '/assets/images/homepageImg3.png',
    alt: 'Portrait of Lakshmi Narayana Pandaga',
    hint: '/assets/images/about.png',
  },
  portraitHint: {
    src: '/assets/images/about.png',
    alt: 'Portrait hint of Lakshmi Narayana Pandaga',
    hint: '/assets/images/about.png',
  },
  contact: {
    // TODO: Replace with the real email address.
    email: { text: 'laxminarayana22@gmail.com', isPlaceholder: true },
    // TODO: Replace with the real city.
    location: { text: 'Hyderabad, INDIA', isPlaceholder: true },
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
    detail: 'Years Experience',
    tag: 'Timeline',
  },
  {
    value: String(EXPERIENCE.length),
    label: 'Organisations',
    detail: 'Industries',
    tag: 'Scale',
  },
  {
    value: 'End-to-end',
    label: 'Design to Development',
    detail: 'Discover • Design • Deliver',
    tag: 'Craft',
  },
];

export const INTRO: readonly string[] = [
  `A user-centered, iterative approach shaped by ${YEARS_OF_EXPERIENCE} years of experience designing enterprise products.`,
];

export const APPROACH_POINTS: readonly string[] = [
  'Understanding business goals and constraints',
  'Understanding users, context, and complex workflows',
  'Defining information architecture, navigation, and user flows',
  'Designing intuitive experiences from wireframes to high-fidelity UI',
  'Prototyping and validating ideas through iteration',
  'Collaborating closely with product, engineering, and stakeholders',
  'Translating requirements into scalable digital experiences',
  'Supporting implementation and refining the experience through delivery',
];

export const DELIVERY_CHAIN: readonly string[] = ['Understand the problem', 'Define the opportunity', 'Design the experience', 'Deliver the solution'];

export const PROCESS: readonly ProcessStep[] = [
  { title: 'Discover', description: 'Business goals, user needs, constraints, and opportunities.' },
  { title: 'Define', description: 'Problems, requirements, users, journeys, and experience goals.' },
  { title: 'Ideate', description: 'Information architecture, concepts, navigation, and user flows.' },
  { title: 'Design', description: 'Wireframes, interaction patterns, prototypes, and visual design.' },
  { title: 'Validate', description: 'Testing concepts, gathering feedback, and iterating toward clarity.' },
  { title: 'Deliver', description: 'Design systems, developer collaboration, implementation, and refinement.' },
];

export const CAPABILITIES: readonly CapabilityGroup[] = [
  {
    id: 'ux',
    title: 'UI/UX Design',
    summary: 'Creating intuitive interfaces and seamless experiences that make complexity feel simple.',
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
    title: 'Product Design',
    summary: 'Designing meaningful products that balance user needs, business goals, and technology.',
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
    title: 'Mobile Apps',
    summary: 'Designing thoughtful mobile experiences that are intuitive, accessible, and engaging.',
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
    title: 'Design Systems',
    summary: 'Building scalable systems that bring consistency, speed, and clarity to product teams.',
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

export const TOOLKIT: readonly {
  category: string;
  tools: readonly string[];
  dark?: boolean;
}[] = [
  {
    category: 'DESIGN & PROTOTYPING',
    tools: ['Figma', 'FigJam', 'Sketch', 'Adobe Creative Cloud'],
  },
  {
    category: 'RESEARCH & USABILITY TESTING',
    tools: ['UserTesting', 'UserZoom', 'Optimal Workshop', 'Lookback', 'Hotjar', 'User Interviews'],
  },
  {
    category: 'COLLABORATION & PRODUCT',
    tools: ['Jira', 'Confluence', 'Miro', 'Slack'],
  },
  {
    category: 'DESIGN SYSTEMS & DEVELOPER HANDOFF',
    tools: ['Figma Dev Mode', 'Storybook', 'Zeplin'],
  },
  {
    category: 'ANALYTICS & PRODUCT INSIGHTS',
    tools: ['Google Analytics', 'Hotjar', 'Contentsquare'],
  },
  {
    category: 'AI & EMERGING WORKFLOWS',
    tools: ['Figma AI / Figma Make', 'ChatGPT', 'Gemini', 'Claude', 'Microsoft Copilot', 'Adobe Firefly', 'Perplexity', 'Cursor', 'Midjourney', 'Uxpilot'],
    dark: true,
  },
];

export const NAV_LINKS = [
  { label: 'Works', path: '/works' },
  { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
] as const;
