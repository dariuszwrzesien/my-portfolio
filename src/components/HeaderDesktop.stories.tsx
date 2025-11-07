import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import HeaderDesktop from './HeaderDesktop';

const meta: Meta<typeof HeaderDesktop> = {
  title: 'Components/HeaderDesktop',
  component: HeaderDesktop,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Meta<typeof HeaderDesktop>>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const AboutMePage: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/about-me']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const ProjectsPage: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/projects']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const ContactPage: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/contact']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
