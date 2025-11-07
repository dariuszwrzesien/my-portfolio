import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import HeaderDesktopLink from './HeaderDesktopLink';

const meta: Meta<typeof HeaderDesktopLink> = {
  title: 'Components/HeaderDesktopLink',
  component: HeaderDesktopLink,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A navigation link component for the desktop header. Features hover effects, active state styling with bottom border, and smooth transitions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: 'The URL path for the link',
      control: 'text',
    },
    name: {
      description: 'The display text for the link',
      control: 'text',
    },
    className: {
      description: 'Additional CSS classes to apply to the wrapper div',
      control: 'text',
    },
    isActive: {
      description: 'Whether the link is in an active state',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof HeaderDesktopLink>>;

export const Default: Story = {
  args: {
    href: '/',
    name: '_hello',
    isActive: false,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="border border-stroke p-6">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Active: Story = {
  args: {
    href: '/',
    name: '_hello',
    isActive: true,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="border border-stroke p-6">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the link in an active state with highlighted text and bottom border.',
      },
    },
  },
};

export const AboutMe: Story = {
  args: {
    href: '/about-me',
    name: '_about-me',
    isActive: false,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="border border-stroke p-6">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'About me navigation link example.',
      },
    },
  },
};

export const AboutMeActive: Story = {
  args: {
    href: '/about-me',
    name: '_about-me',
    isActive: true,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="border border-stroke p-6">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'About me link in active state.',
      },
    },
  },
};

export const LongLinkName: Story = {
  args: {
    href: '/very-long-section',
    name: '_very-long-section-name',
    isActive: false,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="border border-stroke p-6">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Tests how the component handles longer link names.',
      },
    },
  },
};

export const NavigationBar: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/about-me']}>
      <nav className="flex border border-stroke p-6">
        <HeaderDesktopLink href="/" name="_hello" isActive={false} />
        <HeaderDesktopLink href="/about-me" name="_about-me" isActive={true} />
        <HeaderDesktopLink href="/projects" name="_projects" isActive={false} />
        <HeaderDesktopLink href="/contact" name="_contact" isActive={false} />
      </nav>
    </MemoryRouter>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows multiple links together as they would appear in a navigation bar.',
      },
    },
  },
};

export const HoverStates: Story = {
  args: {
    href: '/hover-test',
    name: '_hover-me',
    isActive: false,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="border border-stroke p-4">
          <p className="text-sm text-gray-600 mb-4">Hover over the link to see the transition effects.</p>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the hover effects and transitions of the link.',
      },
    },
  },
};
