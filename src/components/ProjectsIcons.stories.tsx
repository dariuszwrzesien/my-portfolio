import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectsIcons from './ProjectsIcons';
import { ProjectCategory } from '../libs/enums';

const meta: Meta<typeof ProjectsIcons> = {
  title: 'Components/ProjectsIcons',
  component: ProjectsIcons,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A component that displays technology icons with tooltips. Used to show the technologies used in a project. Each icon is wrapped in a tooltip that shows the technology name on hover.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    categories: {
      description: 'Array of project categories/technologies to display as icons',
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof ProjectsIcons>>;

export const Default: Story = {
  args: {
    categories: [ProjectCategory.React, ProjectCategory.TypeScript, ProjectCategory.NodeJS],
  },
};

export const SingleIcon: Story = {
  args: {
    categories: [ProjectCategory.React],
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a single technology icon.',
      },
    },
  },
};

export const AllTechnologies: Story = {
  args: {
    categories: [
      ProjectCategory.React,
      ProjectCategory.Redux,
      ProjectCategory.Vue,
      ProjectCategory.Angular,
      ProjectCategory.NodeJS,
      ProjectCategory.PHP,
      ProjectCategory.JavaScript,
      ProjectCategory.TypeScript,
      ProjectCategory.HTML,
      ProjectCategory.CSS,
      ProjectCategory.TailwindCSS,
      ProjectCategory.Storybook,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'All available technology icons to show the complete icon set.',
      },
    },
  },
};

export const InteractiveTooltips: Story = {
  args: {
    categories: [ProjectCategory.React, ProjectCategory.Vue, ProjectCategory.Angular, ProjectCategory.NodeJS],
  },
  decorators: [
    (Story) => (
      <div className="p-6">
        <p className="text-sm text-gray-600 mb-4">
          Hover over the icons below to see the technology names in tooltips:
        </p>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Interactive example demonstrating the tooltip functionality on hover.',
      },
    },
  },
};
