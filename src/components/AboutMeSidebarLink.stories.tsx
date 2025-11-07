import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import AboutMeSidebarLink from './AboutMeSidebarLink';
import AboutMeSidebarSublink from './AboutMeSidebarSublink';

const meta: Meta<typeof AboutMeSidebarLink> = {
  title: 'Components/AboutMeSidebarLink',
  component: AboutMeSidebarLink,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A navigation link component for the About Me sidebar that displays a folder icon with expandable/collapsible behavior and optional child links.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: 'The URL path for the link',
      control: 'text',
    },
    label: {
      description: 'The display text for the link',
      control: 'text',
    },
    iconColor: {
      description: 'CSS class for the folder icon color',
      control: 'text',
    },
    isActive: {
      description: 'Whether the link is in an active state',
      control: 'boolean',
    },
    children: {
      description: 'Child elements (typically sublinks) shown when active',
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof AboutMeSidebarLink>>;

export const Default: Story = {
  args: {
    href: '/about-me/bio',
    label: 'bio',
    iconColor: 'text-rose-400',
    isActive: false,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-64 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Active: Story = {
  args: {
    href: '/about-me/bio',
    label: 'bio',
    iconColor: 'text-rose-400',
    isActive: true,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-64 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the link in an active state with the dropdown arrow pointing down.',
      },
    },
  },
};

export const WithChildren: Story = {
  args: {
    href: '/about-me/bio',
    label: 'bio',
    iconColor: 'text-rose-400',
    isActive: true,
    children: (
      <>
        <AboutMeSidebarSublink href="#about-me" label="about-me" />
        <AboutMeSidebarSublink href="#skills" label="skills" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-64 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the link with child sublinks displayed when active.',
      },
    },
  },
};

export const Employment: Story = {
  args: {
    href: '/about-me/employment',
    label: 'employment',
    iconColor: 'text-teal-400',
    isActive: true,
    children: (
      <>
        <AboutMeSidebarSublink href="#euvic" label="Euvic" />
        <AboutMeSidebarSublink href="#fp" label="Future Processing" />
        <AboutMeSidebarSublink href="#simgroep" label="SIMgroep" />
        <AboutMeSidebarSublink href="#spot" label="SPOT Group" />
        <AboutMeSidebarSublink href="#mig" label="MIG" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-64 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the employment section with multiple work experience sublinks.',
      },
    },
  },
};

export const Education: Story = {
  args: {
    href: '/about-me/educations',
    label: 'educations',
    iconColor: 'text-indigo-500',
    isActive: true,
    children: (
      <>
        <AboutMeSidebarSublink href="#certifications" label="certifications" />
        <AboutMeSidebarSublink href="#post-graduate" label="post-graduate" />
        <AboutMeSidebarSublink href="#university" label="university" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-64 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the education section with academic and certification sublinks.',
      },
    },
  },
};

export const CustomIconColor: Story = {
  args: {
    href: '/custom-section',
    label: 'custom',
    iconColor: 'text-purple-500',
    isActive: false,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-64 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a custom icon color (purple) for the folder icon.',
      },
    },
  },
};

export const LongLabel: Story = {
  args: {
    href: '/about-me/professional-experience',
    label: 'professional-experience-and-achievements',
    iconColor: 'text-emerald-400',
    isActive: false,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-64 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Tests how the component handles longer label text.',
      },
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    href: '/about-me/bio',
    label: 'bio',
    iconColor: 'text-rose-400',
    isActive: false,
    children: (
      <>
        <AboutMeSidebarSublink href="#about-me" label="about-me" />
        <AboutMeSidebarSublink href="#skills" label="skills" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-64 border border-stroke">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Interactive example where you can toggle the isActive prop to see the expand/collapse behavior.',
      },
    },
  },
};
