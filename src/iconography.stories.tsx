import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  // Navigation & UI Icons
  RiArrowDropDownFill,
  RiArrowDropRightFill,
  RiArrowRightSLine,
  RiFolder3Fill,
  RiFileCodeFill,
  RiErrorWarningLine,
  RiSettings4Line,
  RiCodeBlock,
  RiPuzzle2Line,

  // Social Media Icons
  RiGithubFill,
  RiLinkedinBoxFill,

  // Technology Icons
  RiReactjsLine,
  RiVuejsLine,
  RiAngularjsLine,
  RiNodejsFill,
  RiPhpFill,
  RiHtml5Fill,
  RiCss3Line,
} from '@remixicon/react';
import {
  // Lucide Icons
  Loader2Icon,
  CheckIcon,
  ChevronRightIcon,
  CircleIcon,
  XIcon,
} from 'lucide-react';

// Navigation & UI Icons
const navigationIcons = [
  {
    name: 'Arrow Drop Down',
    component: <RiArrowDropDownFill size={24} />,
    usage: 'Expandable sections, dropdowns',
  },
  {
    name: 'Arrow Drop Right',
    component: <RiArrowDropRightFill size={24} />,
    usage: 'Collapsed sections',
  },
  {
    name: 'Arrow Right Small',
    component: <RiArrowRightSLine size={24} />,
    usage: 'Navigation arrows, next actions',
  },
  {
    name: 'Folder',
    component: <RiFolder3Fill size={24} />,
    usage: 'File/folder representation in sidebar',
  },
  {
    name: 'File Code',
    component: <RiFileCodeFill size={24} />,
    usage: 'Code files, sublinks',
  },
  {
    name: 'Error Warning',
    component: <RiErrorWarningLine size={24} />,
    usage: 'Error states, warnings',
  },
];

// Settings & Menu Icons
const settingsIcons = [
  {
    name: 'Settings',
    component: <RiSettings4Line size={24} />,
    usage: 'Settings dropdown trigger',
  },
  {
    name: 'Code Block',
    component: <RiCodeBlock size={24} />,
    usage: 'Code-related actions',
  },
  {
    name: 'Puzzle',
    component: <RiPuzzle2Line size={24} />,
    usage: 'Extensions, plugins',
  },
];

// Social Media Icons
const socialIcons = [
  {
    name: 'GitHub',
    component: <RiGithubFill size={24} />,
    usage: 'GitHub profile link',
  },
  {
    name: 'LinkedIn',
    component: <RiLinkedinBoxFill size={24} />,
    usage: 'LinkedIn profile link',
  },
];

// Technology Icons
const technologyIcons = [
  {
    name: 'React',
    component: <RiReactjsLine size={24} />,
    usage: 'React projects',
  },
  {
    name: 'Vue.js',
    component: <RiVuejsLine size={24} />,
    usage: 'Vue.js projects',
  },
  {
    name: 'Angular',
    component: <RiAngularjsLine size={24} />,
    usage: 'Angular projects',
  },
  {
    name: 'Node.js',
    component: <RiNodejsFill size={24} />,
    usage: 'Node.js projects',
  },
  { name: 'PHP', component: <RiPhpFill size={24} />, usage: 'PHP projects' },
  {
    name: 'HTML5',
    component: <RiHtml5Fill size={24} />,
    usage: 'HTML projects',
  },
  { name: 'CSS3', component: <RiCss3Line size={24} />, usage: 'CSS projects' },
];

// Lucide Icons (UI Components)
const lucideIcons = [
  {
    name: 'Loader',
    component: <Loader2Icon size={24} />,
    usage: 'Loading states, form submission',
  },
  {
    name: 'Check',
    component: <CheckIcon size={24} />,
    usage: 'Checkboxes, success states',
  },
  {
    name: 'Chevron Right',
    component: <ChevronRightIcon size={24} />,
    usage: 'Dropdown menus, navigation',
  },
  {
    name: 'Circle',
    component: <CircleIcon size={24} />,
    usage: 'Radio buttons, status indicators',
  },
  {
    name: 'Close',
    component: <XIcon size={24} />,
    usage: 'Close buttons, dialogs',
  },
];

const IconSection = ({
  title,
  icons,
  description,
}: {
  title: string;
  icons: Array<{ name: string; component: React.ReactNode; usage: string }>;
  description?: string;
}) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {icons.map(({ name, component, usage }) => (
        <div key={name} className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            {component}
            <span className="font-medium">{name}</span>
          </div>
          <p className="text-sm text-gray-500">{usage}</p>
        </div>
      ))}
    </div>
  </div>
);

const IconographyDemo = () => (
  <div className="p-6">
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-2">Icon System</h1>
      <p className="text-gray-600">
        Complete iconography system used throughout the portfolio application. Icons are primarily from Remix Icon
        library with some Lucide icons for UI components.
      </p>
    </div>

    <IconSection
      title="Navigation & UI Icons"
      icons={navigationIcons}
      description="Icons used for navigation, file system representation, and general UI interactions"
    />

    <IconSection
      title="Settings & Menu Icons"
      icons={settingsIcons}
      description="Icons used in settings menus and action buttons"
    />

    <IconSection
      title="Social Media Icons"
      icons={socialIcons}
      description="Icons for external social media and profile links"
    />

    <IconSection
      title="Technology Icons"
      icons={technologyIcons}
      description="Icons representing different programming languages and technologies"
    />

    <IconSection
      title="UI Component Icons (Lucide)"
      icons={lucideIcons}
      description="Icons from Lucide library used in UI components like buttons, forms, and dialogs"
    />
  </div>
);

const meta: Meta<typeof IconographyDemo> = {
  title: 'Design System/Iconography',
  component: IconographyDemo,
  parameters: {
    layout: 'fullscreen',
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          'Complete iconography system showing all icons used throughout the portfolio application. Icons are categorized by their usage and source library (Remix Icon vs Lucide).',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconographyDemo>;

export const AllIcons: Story = {
  render: () => <IconographyDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Overview of all icons used in the application, organized by category and usage.',
      },
    },
  },
};

export const NavigationIcons: Story = {
  render: () => (
    <div className="p-6">
      <IconSection
        title="Navigation & UI Icons"
        icons={navigationIcons}
        description="Icons used for navigation, file system representation, and general UI interactions"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Navigation and general UI icons used throughout the application.',
      },
    },
  },
};

export const TechnologyIcons: Story = {
  render: () => (
    <div className="p-6">
      <IconSection
        title="Technology Icons"
        icons={technologyIcons}
        description="Icons representing different programming languages and technologies"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Technology and programming language icons used in project categorization.',
      },
    },
  },
};

export const SocialMediaIcons: Story = {
  render: () => (
    <div className="p-6">
      <IconSection
        title="Social Media Icons"
        icons={socialIcons}
        description="Icons for external social media and profile links"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Social media icons used in the footer and contact sections.',
      },
    },
  },
};

export const IconSizes: Story = {
  render: () => (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Icon Sizes</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <RiReactjsLine size={16} />
          <span>Small (16px) - Used inline with text</span>
        </div>
        <div className="flex items-center gap-4">
          <RiReactjsLine size={24} />
          <span>Medium (24px) - Standard size for most UI elements</span>
        </div>
        <div className="flex items-center gap-4">
          <RiReactjsLine size={32} />
          <span>Large (32px) - Used for prominent actions</span>
        </div>
        <div className="flex items-center gap-4">
          <RiReactjsLine size={48} />
          <span>Extra Large (48px) - Used for error/success states</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different icon sizes used throughout the application.',
      },
    },
  },
};

export const IconColors: Story = {
  render: () => (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Icon Colors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <RiFolder3Fill size={24} className="text-rose-400 mb-2" />
          <p className="text-sm">Rose (Bio section)</p>
        </div>
        <div className="p-4 border rounded">
          <RiFolder3Fill size={24} className="text-teal-400 mb-2" />
          <p className="text-sm">Teal (Employment)</p>
        </div>
        <div className="p-4 border rounded">
          <RiFolder3Fill size={24} className="text-indigo-500 mb-2" />
          <p className="text-sm">Indigo (Education)</p>
        </div>
        <div className="p-4 border rounded">
          <RiReactjsLine size={24} className="text-cyan-500 mb-2" />
          <p className="text-sm">Cyan (React)</p>
        </div>
        <div className="p-4 border rounded">
          <RiVuejsLine size={24} className="text-green-500 mb-2" />
          <p className="text-sm">Green (Vue.js)</p>
        </div>
        <div className="p-4 border rounded">
          <RiErrorWarningLine size={24} className="text-red-500 mb-2" />
          <p className="text-sm">Red (Errors)</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Color variations used for different icon contexts and meanings.',
      },
    },
  },
};
