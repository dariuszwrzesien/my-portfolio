import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import AboutMeSidebar from "./AboutMeSidebar";

const meta: Meta<typeof AboutMeSidebar> = {
  title: "Components/AboutMeSidebar",
  component: AboutMeSidebar,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A sidebar component for the About Me section that displays personal information navigation with expandable sections for bio, employment, and education.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<Meta<typeof AboutMeSidebar>>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <div className="h-96 w-64">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const BioActive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/about-me/bio"]}>
        <div className="h-96 w-64">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Shows the sidebar with the Bio section active.",
      },
    },
  },
};

export const AboutMeBaseActive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/about-me"]}>
        <div className="h-96 w-64">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Shows the sidebar with the About Me base route active (which also activates the Bio section).",
      },
    },
  },
};

export const EmploymentActive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/about-me/employment"]}>
        <div className="h-96 w-64">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Shows the sidebar with the Employment section active, displaying all employment history links.",
      },
    },
  },
};

export const EducationsActive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/about-me/educations"]}>
        <div className="h-96 w-64">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Shows the sidebar with the Education section active, displaying all education and certification links.",
      },
    },
  },
};

export const FullHeight: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/about-me/employment"]}>
        <div className="h-screen w-64">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Shows the sidebar at full screen height to demonstrate the complete layout.",
      },
    },
  },
};

export const ResponsiveView: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/about-me/bio"]}>
        <div className="h-96 w-full max-w-xs">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Shows the sidebar in a responsive container to test mobile-like widths.",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
