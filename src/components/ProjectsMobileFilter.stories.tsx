import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import ProjectsMobileFilter from './ProjectsMobileFilter';
import { ProjectCategory } from '../libs/enums';

const categories = [
  ProjectCategory.HTML,
  ProjectCategory.CSS,
  ProjectCategory.React,
  ProjectCategory.Vue,
  ProjectCategory.Angular,
  ProjectCategory.NodeJS,
  ProjectCategory.PHP,
];

const meta: Meta<typeof ProjectsMobileFilter> = {
  title: 'Components/ProjectsMobileFilter',
  component: ProjectsMobileFilter,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Mobile replacement for the projects sidebar. The collapsed bar shows the active technology filters; the expanded panel lists all categories and a button to clear filters.',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Meta<typeof ProjectsMobileFilter>>;

const Template = ({ initialSelected = [] }: { initialSelected?: ProjectCategory[] }) => {
  const [selected, setSelected] = useState<ProjectCategory[]>(initialSelected);
  const handleChange = (label: ProjectCategory) =>
    setSelected((prev) => (prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]));

  return (
    <div className="h-96 w-80">
      <ProjectsMobileFilter
        categories={categories}
        selected={selected}
        onChange={handleChange}
        onClear={() => setSelected([])}
      />
    </div>
  );
};

export const NoFilters: Story = {
  render: () => <Template />,
};

export const WithActiveFilters: Story = {
  render: () => <Template initialSelected={[ProjectCategory.React, ProjectCategory.Vue]} />,
  parameters: {
    docs: {
      description: {
        story: 'Shows the bar with active filters summarized as technology icons and a count.',
      },
    },
  },
};
