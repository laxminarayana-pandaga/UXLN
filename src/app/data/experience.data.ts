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
        title: 'Sr. UX Architect',
        start: { year: 2026, month: 10 },
        end: null,
        summary: 'Led product design initiatives across 7Technix customer-facing experiences from strategy through delivery while aligning user needs business objectives and technical constraints. Understanding researching and designing a new framework and supporting new innovative experiences across. Delivered interaction design for enterprise web applications collaborating with Product and Engineering on end-to-end design execution and maintaining design consistency across releases. Creating Wireframes and Prototypes and Working on a Design System to create and set the visual specifications and guidelines. ',
      },
      // {
      //   title: 'User Interface Engineer',
      //   start: { year: 2026, month: 1 },
      //   end: null,
      // },
    ],
  },
  {
    company: 'Carelon Global Solutions',
    location: 'Hyderabad, Telangana, India',
    roles: [
      {
        title: 'Asst. Manager & UX Designer',
        start: { year: 2020, month: 4 },
        end: { year: 2026, month: 2 },
        summary: 'Led product design engagements across healthcare & Medicare & Medicaid and commercial platforms translating complex business objectives into scalable user experiences for  internal products. Closely working with the Business team gets design and functional requirements. Redesigned health plan selection and comparison flows for Medicare & Medicaid & commercial audiences contributing to a 96% increase in conversion for plan seekers. Designed and developed large-scale applications using Java and Spring Boot deploying microservices on AWS to support high-volume payment and compliance workflows.  ',
      },
      // {
      //   title: 'Lead UX Product Designer',
      //   start: { year: 2020, month: 4 },
      //   end: { year: 2026, month: 2 },
      //   summary:
      //     'Lead for Medicare and Medicaid clients, responsible for UX deliverables across internal products.',
      //   skills: ['UX Research', 'AngularJS', 'Product Design', 'UX/UI'],
      // },
      // {
      //   title: 'Associate',
      //   start: { year: 2020, month: 4 },
      //   end: { year: 2026, month: 1 },
      // },
    ],
  },
  {
    company: 'CompuGain',
    roles: [
      {
        title: 'Lead UX Designer',
        start: { year: 2017, month: 7 },
        end: { year: 2020, month: 4 },
        summary:'Responsible for designing experiences of Bing across multiple canvases. Understanding researching and designing a new framework and supporting new innovative experiences across multiple segments. Creating wireframes and prototypes Designed dynamic and browser-compatible pages using jQuery & JavaScript & AEM and Angular. Developed  applications using Java Spring Boot deployed as containerized services on AWS to support claims and eligibility systems. ',
        skills: ['UX Research', 'Interaction Design', 'Framework Design', 'Digital Experiences'],
      },
      // {
      //   title: 'Sr. Full Stack UX/UI Designer',
      //   start: { year: 2017, month: 7 },
      //   end: { year: 2020, month: 4 },
      // },
    ],
  },
  {
    company: 'Vertex Computer Systems',
    roles: [
      {
        title: 'Sr. UX/UI Designer',
        start: { year: 2016, month: 11 },
        end: { year: 2017, month: 7 },
        summary:'Closely working with the Sales and Business team gets the design and functional  requirements. Creating wireframes & prototypes Create personas User journeys prototypes UI Design Visual Design Business Presentations RFP Designs Infographics. Converting design into web pages by using HTML5 & CSS3 and Bootstrap.',
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
      // {
      //   title: 'Senior User Interface Designer',
      //   start: { year: 2016, month: 11 },
      //   end: { year: 2017, month: 7 },
      // },
    ],
  },
  {
    company: 'Smash Solutions',
    roles: [
      {
        title: 'Sr. UX/UI Designer',
        start: { year: 2012, month: 8 },
        end: { year: 2016, month: 10 },
        summary:'I have been broadly responsible for concept visualization & creation of layout design Designed interaction models and accessible interfaces for data-intensive compliance-driven regulatory applications. Created end-to-end design deliverables from wireframes through validated prototypes. Creating wireframes & prototypes and Website/Portal web Application. Create a UI Library style guides Theme based modules and color palettes Converting design into web pages by using HTML5 and CSS3 and Bootstrap. ',
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
    company: 'Pegasys Information Technologies',
    roles: [
      {
        title: 'Sr. UI Designer',
        start: { year: 2010, month: 6 },
        end: { year: 2012, month: 8 },
        summary:'I am doing a individual contributor role for the design related tasks Working with multiple projects whatever the pages or designs are required for the projects designs them with illustrator and Photoshop. Established scalable interaction patterns and responsive frameworks adopted across desktop and mobile by multiple product squads. Converting into HTML pages and handover to the Backend team and whenever the backend team are having issues with the design related issues or integrating jQuery plugins I will help them to solve the problems.',
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
    company: 'Plexasys Solutions',
    roles: [
      {
        title: 'Web Designer',
        start: { year: 2008, month: 6 },
        end: { year: 2010, month: 6 },
        summary:'Basically I used to get involved in the complete development life cycle of the projects. I am involved in research and analysis of features in the competitor and other inspirational portals in the same Domain. Create a UI Design and HTML pages and explaining the feature to the programmers and testing the functionality once its done.',
      },
    ],
  },
];
