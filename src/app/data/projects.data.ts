import { Project } from '../core/models/portfolio.models';

/**
 * Case studies are derived only from the supplied professional history.
 * Anything that needs real project detail (screens, outcomes, metrics) is marked
 * `isPlaceholder` and rendered with a visible "To be added" marker.
 *
 * Images: every `src` starts as '/assets/images/image-placeholder.png'.
 * To add a real visual, drop the file into /public/assets/images/projects/ and change
 * `src` to its path — `hint` is the suggested filename for each slot.
 */
export const PROJECTS: readonly Project[] = [
  {
    slug: 'enterprise-healthcare-experience',
    title: 'Audit Genie',
    subtitle: 'Designed the end-to-end design of the Health Reports experience from concept to delivery, simplifying complex health information into an intuitive and actionable member experience.',
    summary: 'Open Enrollment is a complex healthcare decision-making experience. Members need to understand plan differences, costs, coverage, and benefits while navigating a large amount of information. The challenge was to make the Shop experience easier to understand and easier to navigate while helping members Extracting their available Reports.',
    subsummary: 'Built a scalable product foundation from the ground up, creating the design system, evolving the customer-facing brand, and simplifying bulk Health Report downloads for both businesses and individuals.',
    category: 'UX architect / Product Designer',
    subcategory: 'Healthcare / Member Experience / Internal Portal',
    role: 'I worked across the end-to-end experience, from understanding the existing journey and information architecture to redesigning the Member experience and Extract Reports. My work focused on simplifying complex healthcare information and creating clearer ways for members to compare and understand plans.',
    company: 'Elevance Health',
    timeline: 'Apr 2020 – Feb 2026',
    industry: 'Healthcare',
    contributions: ['UX Research', 'Product Design', 'UX/UI', 'AngularJS'],
    featured: true,
    cover: {
      src: '/assets/images/auditgenie.png',
      alt: 'Enterprise healthcare product interface',
      hint: '/assets/images/auditgenie.png',
    },
    challenge: [
      'Internal products supporting Medicare and Medicaid clients carry complex, rule-heavy workflows. The people using them need clarity and consistency to do their work well.',
      'As Lead UX Product Designer, I was responsible for UX deliverables across these internal products — keeping research, product thinking and interface design aligned across teams.',
    ],
    approach: ['Research', 'Information Architecture', 'Wireframes', 'UI Design', 'Development Collaboration'],
    gallery: [
      {
        src: '/assets/images/artefacts.png',
        alt: 'Workflow and information architecture overview',
        hint: '/assets/images/artefacts.png',
        caption: 'Information architecture & workflow mapping',
      },
      {
        src: '/assets/images/auditgenie.png',
        alt: 'High-fidelity product screens',
        hint: '/assets/images/auditgenie.png',
        caption: 'High-fidelity product UI',
      },
    ],
    decisions: [
      {
        title: 'Research before interface',
        description:
          'UX research grounded decisions in how internal users actually work, rather than in assumptions about the workflow.',
      },
      {
        title: 'Product thinking across tools',
        description:
          'Treating internal products as a connected set, so patterns and deliverables stay consistent from one product to the next.',
      },
      {
        title: 'Designing with the build in mind',
        description:
          'Working with AngularJS implementation in view kept designs realistic for engineering teams to deliver.',
      },
    ],
    outcome: {
      text: 'Add project outcomes here — e.g. what changed for users or teams after release.',
      isPlaceholder: true,
    },
    myRole: [
      { area: 'UX', detail: 'Owned UX deliverables as Lead for Medicare & Medicaid client products.' },
      { area: 'Research', detail: 'Planned and ran UX research.' },
      { area: 'UI', detail: 'UX/UI and product design.' },
      { area: 'Collaboration', detail: 'Worked with engineering on AngularJS-based products.' },
    ],
  },
  {
    slug: 'search-answer-experiences',
    title: 'Carelon - Dx Utility',
    subtitle: 'Designed the end-to-end design of the Health Reports experience from concept to delivery, simplifying complex health information into an intuitive and actionable member experience.',
    summary: 'Open Enrollment is a complex healthcare decision-making experience. Members need to understand plan differences, costs, coverage, and benefits while navigating a large amount of information. The challenge was to make the Shop experience easier to understand and easier to navigate while helping members Extracting their available Reports.',
    subsummary: 'Researching and designing scalable frameworks for search answers across multiple canvases and segments.',
    category: 'Product Designer / UX Manager',
    subcategory: 'Healthcare / Member Experience / Internal Portal',
    role: 'I worked across the end-to-end experience, from understanding the existing journey and information architecture to redesigning the Member experience and Extract Reports. My work focused on simplifying complex healthcare information and creating clearer ways for members to compare and understand plans.',
    company: 'Carelon Global Solutions',
    timeline: 'Jul 2017 – Apr 2020',
    industry: 'Search',
    contributions: ['UX Research', 'Interaction Design', 'Framework Design'],
    featured: true,
    cover: {
      src: '/assets/images/image-placeholder.png',
      alt: 'Search answer experience designs',
      hint: '/assets/images/projects/search-cover.jpg',
    },
    challenge: [
      'Search answers appear across many canvases and serve many segments. Designing each one in isolation does not scale.',
      'The work was to research and design frameworks for answers, and to explore innovative experiences across multiple segments.',
    ],
    approach: ['Research', 'Information Architecture', 'Wireframes', 'UI Design', 'Development Collaboration'],
    gallery: [
      {
        src: '/assets/images/image-placeholder.png',
        alt: 'Answer framework structure',
        hint: '/assets/images/projects/search-01.jpg',
        caption: 'Answer framework',
      },
      {
        src: '/assets/images/image-placeholder.png',
        alt: 'Answer designs across canvases',
        hint: '/assets/images/projects/search-02.jpg',
        caption: 'Experiences across canvases',
      },
    ],
    decisions: [
      {
        title: 'Frameworks over one-off answers',
        description:
          'Designing reusable answer frameworks rather than individual screens, so new answers could follow a shared structure.',
      },
      {
        title: 'Designing for multiple canvases',
        description:
          'Considering each canvas an answer appears on, so the experience holds together wherever it is shown.',
      },
      {
        title: 'Research-led exploration',
        description:
          'Using research to shape innovative experiences for different segments instead of a single generic answer.',
      },
    ],
    outcome: {
      text: 'Add project outcomes here — e.g. which frameworks shipped and how they were adopted.',
      isPlaceholder: true,
    },
    myRole: [
      { area: 'Research', detail: 'Researched answer frameworks and new experiences.' },
      { area: 'UX', detail: 'Interaction design across multiple canvases.' },
      { area: 'UI', detail: 'Visual and framework design for answers.' },
    ],
  },
  {
    slug: 'business-and-rfp-design',
    title: 'Benton',
    subtitle: 'Spearheaded the design of a new BLE battery monitoring experience, transforming complex vehicle and battery diagnostics into a simple, intuitive mobile experience.',
    summary:'Connected devices were becoming increasingly important for vehicle and battery management. The opportunity was to design a BLE-enabled mobile experience that could give users a simple, clear, and reliable way to monitor battery health, view real-time diagnostics, manage connected devices, and understand performance data.',
    subsummary: 'Translating business requirements into persuasive UX artefacts, personas, and RFP designs for client proposals.',
    category: 'UX / Product Designer',
    subcategory: 'Automotive / Battery Monitoring / Mobile',
    role: 'I led the end-to-end UX and product-design effort, translating complex BLE connectivity and battery diagnostics into a clear, intuitive mobile experience through experience architecture, user flows, interaction design, and visual design.',
    company: 'Vertex Computer Systems',
    timeline: 'Nov 2016 – Jul 2017',
    industry: 'IT Services',
    contributions: ['Personas', 'User Journeys', 'Prototypes', 'RFP Design', 'Infographics'],
    featured: true,
    cover: {
      src: '/assets/images/image-placeholder.png',
      alt: 'Personas, journeys and proposal designs',
      hint: '/assets/images/projects/business-cover.jpg',
    },
    challenge: [
      'Sales and business teams needed design support early — before a project exists — to communicate ideas clearly to prospective clients.',
      'The work was to gather requirements with those teams and translate them into UX artefacts, UI concepts and persuasive visual material.',
    ],
    approach: ['Research', 'Wireframes', 'Prototype', 'UI Design'],
    gallery: [
      {
        src: '/assets/images/image-placeholder.png',
        alt: 'Personas and user journey maps',
        hint: '/assets/images/projects/business-01.jpg',
        caption: 'Personas & user journeys',
      },
      {
        src: '/assets/images/image-placeholder.png',
        alt: 'RFP design and infographics',
        hint: '/assets/images/projects/business-02.jpg',
        caption: 'RFP design & infographics',
      },
    ],
    decisions: [
      {
        title: 'Start from business requirements',
        description:
          'Working directly with sales and business teams meant designs answered the real brief behind each opportunity.',
      },
      {
        title: 'Make users visible early',
        description:
          'Personas and user journeys brought a user perspective into business conversations from the start.',
      },
      {
        title: 'Visual storytelling',
        description:
          'Business presentations, RFP designs and infographics made complex proposals easier to understand.',
      },
    ],
    outcome: {
      text: 'Add project outcomes here.',
      isPlaceholder: true,
    },
    myRole: [
      { area: 'Research', detail: 'Requirement gathering, personas and user journeys.' },
      { area: 'Prototyping', detail: 'Prototypes to communicate concepts.' },
      { area: 'UI', detail: 'UI, visual design, presentations, RFPs and infographics.' },
      { area: 'Collaboration', detail: 'Worked closely with sales and business teams.' },
    ],
  },
  {
    slug: 'websites-portals-web-applications',
    title: 'GateGourmet',
    subtitle: 'Designed enterprise digital experiences for gategroup, simplifying complex operational workflows and creating more intuitive experiences across travel, retail, and hospitality services.',
    summary: 'gategroup operates across a complex ecosystem of travel, catering, retail, and hospitality services. Teams need to manage interconnected operational processes, information, and workflows while supporting a seamless experience across different touchpoints. The challenge was to simplify these complex workflows, organize information more clearly, and create intuitive digital experiences that help users complete tasks efficiently and confidently.',
    subsummary: 'Designing enterprise websites, portals, and web applications with consistent visual language and scalable patterns.',
    category: 'Product Designer / Lead UX',
    subcategory: 'Food & Travel / Digital Products / Enterprise',
    role: 'I worked hands-on across UX strategy, interaction design, visual design, prototyping, and experience definition. I helped translate complex operational requirements into cohesive digital experiences, working across workflows, enterprise applications, and customer-facing experiences while balancing usability, efficiency, and the needs of a global aviation business.',
    company: 'Smash Solutions',
    timeline: 'Aug 2012 – Oct 2016',
    industry: 'Web & Digital',
    contributions: ['Wireframes', 'Style Guides', 'Usability Testing', 'HTML5 / CSS3', 'Bootstrap'],
    featured: true,
    cover: {
      src: '/assets/images/image-placeholder.png',
      alt: 'Website and portal designs',
      hint: '/assets/images/projects/web-cover.jpg',
    },
    challenge: [
      'Websites, portals and web applications each needed a clear structure, a consistent visual language and an interface that could be built reliably.',
      'The role covered the full path: business requirement analysis and design strategy, through concepts, wireframes and prototypes, to usability testing and design recommendations.',
    ],
    approach: [
      'Research',
      'Information Architecture',
      'Wireframes',
      'Prototype',
      'UI Design',
      'Development Collaboration',
    ],
    gallery: [
      {
        src: '/assets/images/image-placeholder.png',
        alt: 'Wireframes and prototypes',
        hint: '/assets/images/projects/web-01.jpg',
        caption: 'Wireframes & prototypes',
      },
      {
        src: '/assets/images/image-placeholder.png',
        alt: 'Style guide',
        hint: '/assets/images/projects/web-02.jpg',
        caption: 'Style guide',
      },
    ],
    decisions: [
      {
        title: 'Structure before style',
        description:
          'Requirement analysis and wireframes came first, so visual design sat on a clear information structure.',
      },
      {
        title: 'Style guides for consistency',
        description:
          'Documented style guides kept sites, portals and applications consistent as they grew.',
      },
      {
        title: 'Validate with users',
        description:
          'Usability testing informed design recommendations rather than relying on opinion.',
      },
      {
        title: 'Design that ships',
        description:
          'Hands-on HTML5, CSS3 and Bootstrap work closed the gap between design and implementation.',
      },
    ],
    outcome: {
      text: 'Add project outcomes here.',
      isPlaceholder: true,
    },
    myRole: [
      { area: 'UX', detail: 'Requirement analysis, design strategy and wireframes.' },
      { area: 'Prototyping', detail: 'Concept visualisation and prototypes.' },
      { area: 'UI', detail: 'Visual design, style guides and multimedia presentations.' },
      { area: 'Research', detail: 'Usability testing and design recommendations.' },
      { area: 'Frontend', detail: 'HTML, HTML5, XHTML, CSS, CSS3 and Twitter Bootstrap.' },
    ],
  },
  {
    slug: 'client-websites-wordpress',
    title: 'Client Websites on WordPress',
    subtitle: 'Designing and building websites with WordPress theme customisation',
    summary:'Designing and building websites for US clients — layouts, HTML conversion and WordPress theme customisation.',
    subsummary: 'Building custom WordPress themes and client websites with direct US client collaboration.',
    category: 'Web Design · WordPress',
    subcategory: 'WordPress Development',
    role: 'Sr. UI Designer',
    company: 'Pegasys Information Technologies Pvt Ltd',
    timeline: 'Jun 2010 – Aug 2012',
    industry: 'Web',
    contributions: ['Website Design', 'HTML Conversion', 'WordPress', 'jQuery'],
    featured: false,
    cover: {
      src: '/assets/images/image-placeholder.png',
      alt: 'Client website designs',
      hint: '/assets/images/projects/wordpress-cover.jpg',
    },
    challenge: [
      'Multiple client websites needed to be designed, built and kept up to date — often with requirements and design updates arriving directly from clients in the US.',
    ],
    approach: ['Research', 'Information Architecture', 'Wireframes', 'UI Design', 'Development Collaboration'],
    gallery: [
      {
        src: '/assets/images/image-placeholder.png',
        alt: 'Website page layouts',
        hint: '/assets/images/projects/wordpress-01.jpg',
        caption: 'Page layouts',
      },
      {
        src: '/assets/images/image-placeholder.png',
        alt: 'Customised WordPress themes',
        hint: '/assets/images/projects/wordpress-02.jpg',
        caption: 'WordPress themes',
      },
    ],
    decisions: [
      {
        title: 'Working directly with clients',
        description:
          'Collaborating with US clients on requirements and updates kept designs close to what each client needed.',
      },
      {
        title: 'Customisable themes',
        description:
          'Theme customisation and WordPress plugins let each site be tailored without starting from scratch.',
      },
      {
        title: 'From layout to live page',
        description:
          'Owning page layout and HTML conversion, with jQuery plugins for interaction, carried each design through to the browser.',
      },
    ],
    outcome: {
      text: 'Add project outcomes here.',
      isPlaceholder: true,
    },
    myRole: [
      { area: 'UI', detail: 'Website design and page layout.' },
      { area: 'Frontend', detail: 'HTML conversion, jQuery and WordPress plugins, theme customisation.' },
      { area: 'Collaboration', detail: 'Requirements and design updates with US clients.' },
    ],
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
