import { ProjectCategory } from "../libs/enums";

export const projects = [
  {
    title: "Platform for Creating Elearning Materials",
    description:
      "My primary responsibility was to design and implement high-quality, reusable UI components with a strong focus on accessibility, ensuring full compliance with WCAG 2+ standards. This included keyboard navigation support, screen reader compatibility, color contrast optimization, and semantic HTML structure to create inclusive user experiences.",
    imageUrl: "/images/e-learning.jpg",
    categories: [
      ProjectCategory.React,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "Dental customer service application",
    description:
      "My main responsibilities included designing and developing reusable, modular UI components with a focus on scalability and consistency across the application. I performed code refactoring to enhance codebase structure, readability, and long-term maintainability. Additionally, I set up and configured Storybook to document components, enable visual regression testing, and streamline collaboration with designers. I also wrote comprehensive unit tests to ensure high code quality, reliability, and prevent regressions.",
    imageUrl: "/images/dental-clinics.jpg",
    categories: [
      ProjectCategory.Angular,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "Dedicated Application for Medical Clinics",
    description:
      "The main challenge involved tackling significant technical debt by refactoring legacy code, implementing high-quality, accessible Angular components, and consolidating duplicated functionality into shared libraries to promote reusability, consistency, and maintainability across the application.",
    imageUrl: "/images/medical-clinics1.jpg",
    categories: [
      ProjectCategory.Angular,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "Trade platform for the polymer materials sector",
    description:
      "My main responsibilities included designing and implementing robust, reusable UI components using Vue.js, with a strong emphasis on performance, accessibility, and maintainability. I also actively worked on identifying and addressing technical debt, improving the overall code quality and aligning the project with modern development standards. This involved refactoring legacy code, optimizing component structure, and collaborating with the team to establish best practices.",
    imageUrl: "/images/polymers2.jpg",
    categories: [
      ProjectCategory.Vue,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "Application for Managing Food Suppliers and Deliveries",
    description:
      "Built for one of the largest companies in the Turkish market, the app was developed using a microfrontend architecture enabling independent production deployments. It supports management at various distribution levels, including sales reps, tenants, stores, and brands. As a Frontend Developer working with React, I was responsible for building and delivering new features using modern JavaScript (ES6+) and component-based architecture. I ensured code quality and reliability by writing unit tests, and actively collaborated with backend developers to integrate the application with RESTful APIs. A key part of my role involved optimizing performance to enhance user experience, including code refactoring and efficient state management. I also implemented automated end-to-end tests using Playwright to catch regressions early and maintain high product stability. When issues arose, I effectively debugged and fixed bugs, contributing to a smooth and responsive application",
    imageUrl: "/images/food1.jpg",
    categories: [
      ProjectCategory.React,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "Water Network Monitoring Application",
    description:
      "The application's primary goal is to identify potential water leaks, collect data from sensors installed in the network, process the data, and present it visually. The main users are water network diagnosticians. My key responsibilities included developing new features and writing unit tests to ensure code quality. I played a significant role in refactoring a monolithic application into a scalable microservices architecture. Additionally, I designed and implemented an innovative algorithm to detect potential leaks, enhancing the system’s reliability and efficiency.",
    imageUrl: "/images/water-supply.jpg",
    categories: [
      ProjectCategory.NodeJS,
      ProjectCategory.Angular,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "Quality assurance application for the automotive industry",
    description:
      "My task was to develop a system from scratch to support the quality testing process of car shock absorbers. The main focus was to create a user-friendly interface that would allow lab technicians to document each step of the inspection process in an intuitive and efficient way. I worked on both the frontend and backend of the application — using JavaScript to build the interface and PHP with the Symfony 2 framework to implement the backend logic, manage data flow, and handle communication with the database",
    imageUrl: "/images/automotive.jpg",
    categories: [
      ProjectCategory.PHP,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "Financial data search application for the fin-tech industry",
    description:
      "The main purpose of the application was to collect financial data from publicly available websites and prepare it for editorial use. My responsibilities included developing a web crawler algorithm to gather data from the internet, as well as building a custom CMS that allowed editors to create articles based on the collected information. I worked on both the frontend, using JavaScript, and the backend, using PHP.",
    imageUrl: "/images/fin-tech.jpg",
    categories: [
      ProjectCategory.PHP,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "A real estate sales management application",
    description:
      "I worked on a property platform for an Irish client that enabled users to browse real estate listings and explore zoning and land use plans. My core responsibilities included developing frontend components and contributing to the PHP-based backend. A key part of the backend work involved integrating with various external systems to retrieve up-to-date information on properties and urban planning data.",
    imageUrl: "/images/real-estate.jpg",
    categories: [
      ProjectCategory.PHP,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
];
