import { ProjectCategory } from "../libs/enums";

export const projects = [
  {
    title: "Platform for Creating E-learning Materials",
    description:
      "Main responsibility was to implement high-quality components that meet WCAG 2+ accessibility requirements.",
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
      "My main responsibilities involved developing and implementing reusable UI components, performing code refactoring to improve structure and maintainability, setting up and configuring Storybook for component documentation and visual testing, as well as writing unit tests to ensure code quality and reliability.",
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
      "The main challenge was addressing technical debt, implementing high-quality components, and consolidating repetitive elements into shared libraries for reuse.",
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
    imageUrl: "/images/polymers1.jpg",
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
    imageUrl: "/images/food.jpg",
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
    description: "TBA",
    imageUrl: "/images/automotive.jpg",
    categories: [
      ProjectCategory.PHP,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "Financial data search application for the fin-tech industry",
    description: "TBA",
    imageUrl: "/images/fin-tech.jpg",
    categories: [
      ProjectCategory.PHP,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
  {
    title: "A real estate sales management application",
    description: "TBA",
    imageUrl: "/images/real-estate.jpg",
    categories: [
      ProjectCategory.PHP,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
    ],
  },
];
