import type { Meta, StoryObj } from "@storybook/react-vite";
import ProjectsCard from "./ProjectsCard";
import { ProjectCategory } from "../libs/enums";

const meta: Meta<typeof ProjectsCard> = {
  title: "Components/ProjectsCard",
  component: ProjectsCard,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A project card component that displays project information with an image, title, description, and technology icons. Clicking the card opens a detailed dialog with the full description.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The project title",
      control: "text",
    },
    description: {
      description: "The project description (shown in full in the dialog)",
      control: "text",
    },
    imageUrl: {
      description: "URL for the project image/screenshot",
      control: "text",
    },
    categories: {
      description: "Array of technology categories used in the project",
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof ProjectsCard>>;

export const Default: Story = {
  args: {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard for managing products and orders.",
    imageUrl: "/images/e-learning.jpg",
    categories: [
      ProjectCategory.React,
      ProjectCategory.TypeScript,
      ProjectCategory.NodeJS,
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-80 p-5">
        <Story />
      </div>
    ),
  ],
};

export const WithoutImage: Story = {
  args: {
    title: "API Service",
    description:
      "A RESTful API service built with Node.js and Express. Provides endpoints for user management, data processing, and third-party integrations with comprehensive documentation and testing.",
    categories: [ProjectCategory.NodeJS, ProjectCategory.JavaScript],
  },
  decorators: [
    (Story) => (
      <div className="w-80 p-5">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Project card without an image, showing how the layout adapts.",
      },
    },
  },
};

export const ReactExampleProject: Story = {
  args: {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, contact form, and project showcase with filtering capabilities.",
    imageUrl: "/images/medical-clinics.jpg",
    categories: [
      ProjectCategory.React,
      ProjectCategory.TypeScript,
      ProjectCategory.TailwindCSS,
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-80 p-5">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "A React-based project with modern tech stack.",
      },
    },
  },
};

export const LongTitle: Story = {
  args: {
    title:
      "Advanced Machine Learning Analytics Platform for Enterprise Data Processing",
    description:
      "An advanced analytics platform that leverages machine learning algorithms to process large datasets and provide actionable insights for enterprise decision-making.",
    imageUrl: "/images/polymers1.jpg",
    categories: [
      ProjectCategory.React,
      ProjectCategory.TypeScript,
      ProjectCategory.NodeJS,
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-80 p-5">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Tests how the card handles longer project titles.",
      },
    },
  },
};

export const ManyCategories: Story = {
  args: {
    title: "Multi-Technology Project",
    description:
      "A complex project utilizing multiple technologies and frameworks to demonstrate interoperability and comprehensive full-stack development skills across different platforms and languages.",
    imageUrl: "/images/water-supply.jpg",
    categories: [
      ProjectCategory.React,
      ProjectCategory.Redux,
      ProjectCategory.Vue,
      ProjectCategory.Angular,
      ProjectCategory.TypeScript,
      ProjectCategory.JavaScript,
      ProjectCategory.NodeJS,
      ProjectCategory.TailwindCSS,
      ProjectCategory.React,
      ProjectCategory.Redux,
      ProjectCategory.Vue,
      ProjectCategory.Angular,
      ProjectCategory.TypeScript,
      ProjectCategory.JavaScript,
      ProjectCategory.NodeJS,
      ProjectCategory.TailwindCSS,
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-80 p-5">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Shows how the card displays many technology categories.",
      },
    },
  },
};

export const ProjectGrid: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-5 overflow-auto custom-scrollbar w-full">
      <ProjectsCard
        title="E-Commerce Platform"
        description="Modern e-commerce platform with React and Node.js"
        imageUrl="/images/e-learning.jpg"
        categories={[
          ProjectCategory.React,
          ProjectCategory.TypeScript,
          ProjectCategory.NodeJS,
        ]}
      />
      <ProjectsCard
        title="Vue Dashboard"
        description="Dashboard application built with Vue.js"
        imageUrl="/images/fin-tech.jpg"
        categories={[ProjectCategory.Vue, ProjectCategory.JavaScript]}
      />
      <ProjectsCard
        title="Angular App"
        description="Enterprise application with Angular"
        imageUrl="/images/automotive.jpg"
        categories={[ProjectCategory.Angular, ProjectCategory.TypeScript]}
      />
      <ProjectsCard
        title="PHP CMS"
        description="Content management system in PHP"
        imageUrl="/images/dental-clinics.jpg"
        categories={[
          ProjectCategory.PHP,
          ProjectCategory.HTML,
          ProjectCategory.CSS,
        ]}
      />
      <ProjectsCard
        title="Full-Stack App"
        description="Complete social media platform"
        imageUrl="/images/real-estate.jpg"
        categories={[
          ProjectCategory.React,
          ProjectCategory.Redux,
          ProjectCategory.NodeJS,
        ]}
      />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Shows multiple project cards in a grid layout as they would appear in the projects page.",
      },
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    title: "Interactive Demo",
    description:
      "This is an interactive example. Click on the card to open the dialog and see the full project description. The dialog will show the title, technology icons, and complete description in a larger format.",
    imageUrl: "/images/food.jpg",
    categories: [
      ProjectCategory.React,
      ProjectCategory.Storybook,
      ProjectCategory.TypeScript,
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-80 p-5">
        <p className="text-sm text-gray-600 mb-4">
          Click the project card below to see the dialog functionality:
        </p>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example demonstrating the dialog functionality when clicking the card.",
      },
    },
  },
};
