import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import AboutMeSidebarSublink from "./AboutMeSidebarSublink";

const meta: Meta<typeof AboutMeSidebarSublink> = {
  title: "Components/UI/AboutMeSidebarSublink",
  component: AboutMeSidebarSublink,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A sublink component used within the About Me sidebar sections. Displays a file icon with a label and acts as a navigation link to specific content sections.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The display text for the sublink",
      control: "text",
    },
    href: {
      description: "The URL path or anchor for the link",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof AboutMeSidebarSublink>>;

export const Default: Story = {
  args: {
    label: "about-me",
    href: "#about-me",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-48 p-2 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Skills: Story = {
  args: {
    label: "skills",
    href: "#skills",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-48 p-2 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Sublink for the skills section within the bio page.",
      },
    },
  },
};

export const LongLabel: Story = {
  args: {
    label: "post-graduate-studies-and-specializations",
    href: "#post-graduate",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-48 p-2 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Tests how the component handles longer label text.",
      },
    },
  },
};

export const MultipleSublinks: Story = {
  render: () => (
    <MemoryRouter>
      <div className="w-64 p-2 border border-stroke space-y-1">
        <AboutMeSidebarSublink href="#about-me" label="about-me" />
        <AboutMeSidebarSublink href="#skills" label="skills" />
        <AboutMeSidebarSublink href="#experience" label="experience" />
        <AboutMeSidebarSublink href="#achievements" label="achievements" />
      </div>
    </MemoryRouter>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows multiple sublinks together as they would appear in a section.",
      },
    },
  },
};

export const EmploymentSection: Story = {
  render: () => (
    <MemoryRouter>
      <div className="w-64 p-2 border border-stroke space-y-1">
        <AboutMeSidebarSublink href="#euvic" label="Euvic" />
        <AboutMeSidebarSublink href="#fp" label="Future Processing" />
        <AboutMeSidebarSublink href="#simgroep" label="SIMgroep" />
        <AboutMeSidebarSublink href="#spot" label="SPOT Group" />
        <AboutMeSidebarSublink href="#mig" label="MIG" />
      </div>
    </MemoryRouter>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows all employment history sublinks as they appear in the employment section.",
      },
    },
  },
};

export const EducationSection: Story = {
  render: () => (
    <MemoryRouter>
      <div className="w-64 p-2 border border-stroke space-y-1">
        <AboutMeSidebarSublink href="#certifications" label="certifications" />
        <AboutMeSidebarSublink href="#post-graduate" label="post-graduate" />
        <AboutMeSidebarSublink href="#university" label="university" />
      </div>
    </MemoryRouter>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows all education sublinks as they appear in the education section.",
      },
    },
  },
};

export const WithCustomHref: Story = {
  args: {
    label: "external-link",
    href: "https://example.com",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-48 p-2 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Example with an external URL instead of a hash anchor.",
      },
    },
  },
};
