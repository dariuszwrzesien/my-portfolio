import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip';
import { RiInformationLine, RiQuestionLine, RiSettings4Line, RiHeartLine, RiDeleteBin2Line } from '@remixicon/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A tooltip component built with Radix UI primitives. Displays contextual information when hovering or focusing on trigger elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: 'The controlled open state of the tooltip',
      control: 'boolean',
    },
    defaultOpen: {
      description: 'The default open state (uncontrolled)',
      control: 'boolean',
    },
    onOpenChange: {
      description: 'Callback when the open state changes',
    },
  },
  args: {
    onOpenChange: fn(),
  },
};

export default meta;
type Story = StoryObj<Meta<typeof Tooltip>>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Hover for tooltip
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a helpful tooltip message</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic tooltip that appears on hover.',
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
          <RiInformationLine className="w-5 h-5" />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Click for more information</p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltip attached to an icon button.',
      },
    },
  },
};

export const HelpTooltip: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-5">
      <label className="text-sm font-medium">Password</label>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <RiQuestionLine className="w-4 h-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Password must be at least 8 characters long and include numbers</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Help tooltip next to a form label.',
      },
    },
  },
};

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Long tooltip content
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip message that demonstrates how the tooltip handles multi-line content. It
          automatically balances the text and maintains good readability.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with longer, multi-line content.',
      },
    },
  },
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8 items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-3 py-2 bg-gray-600 text-white rounded">Left</button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-3 py-2 bg-green-600 text-white rounded">Top</button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-3 py-2 bg-blue-600 text-white rounded">Bottom</button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-3 py-2 bg-red-600 text-white rounded">Right</button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips positioned on different sides of their triggers.',
      },
    },
  },
};

export const ActionTooltips: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
            <RiDeleteBin2Line className="w-5 h-5" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete item</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
            <RiSettings4Line className="w-5 h-5" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
            <RiHeartLine className="w-5 h-5" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to favorites</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Action buttons with descriptive tooltips.',
      },
    },
  },
};

export const DisabledElement: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block">
            <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
              Disabled Button
            </button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>This action is not available</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block">
            <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
              Premium Feature
            </button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Upgrade to Premium to use this feature</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips on disabled elements (wrapped in span for accessibility).',
      },
    },
  },
};

export const WithKeyboardShortcut: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Save
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <span>Save document</span>
            <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">⌘S</span>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Search
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <span>Open search</span>
            <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips that include keyboard shortcuts.',
      },
    },
  },
};

export const FormTooltips: Story = {
  render: () => (
    <div className="w-80 space-y-4 p-5">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Email Address</label>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <RiQuestionLine className="w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>We'll never share your email with anyone</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Password Strength</label>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <RiInformationLine className="w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <div className="space-y-1">
                <p className="font-medium">Strong password requirements:</p>
                <ul className="text-xs space-y-0.5">
                  <li>• At least 8 characters</li>
                  <li>• Include uppercase and lowercase</li>
                  <li>• Include numbers</li>
                  <li>• Include special characters</li>
                </ul>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="Enter secure password"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips used in form context to provide additional information.',
      },
    },
  },
};

export const RichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
          Rich Content
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium">Service Status: Online</span>
          </div>
          <p className="text-xs">All systems operational. Last updated: 2 minutes ago</p>
          <div className="flex gap-1">
            <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">99.9% uptime</span>
            <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">5ms latency</span>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with rich content including status indicators and metrics.',
      },
    },
  },
};
