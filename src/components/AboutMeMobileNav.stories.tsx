import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import AboutMeMobileNav from './AboutMeMobileNav';

const meta: Meta<typeof AboutMeMobileNav> = {
  title: 'Components/AboutMeMobileNav',
  component: AboutMeMobileNav,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Mobile replacement for the About Me sidebar. Shows the current section in a collapsible bar and lets users switch between bio, employment and educations.',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Meta<typeof AboutMeMobileNav>>;

export const BioActive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/about-me/bio']}>
        <div className="h-64 w-80">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const EmploymentActive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/about-me/employment']}>
        <div className="h-64 w-80">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the bar with the Employment section active.',
      },
    },
  },
};
