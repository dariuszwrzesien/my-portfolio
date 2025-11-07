import type { Meta, StoryObj } from '@storybook/react-vite';
import { SettingsDropdown } from './SettingsDropdown';
import { LayoutProvider } from '../contexts';

const meta: Meta<typeof SettingsDropdown> = {
  title: 'Components/SettingsDropdown',
  component: SettingsDropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A settings dropdown component that allows users to change background effects and access external links for Storybook and page source. Uses a dropdown menu with radio buttons for background selection.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Additional CSS classes to apply to the trigger element',
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <LayoutProvider>
        <div className="p-8">
          <Story />
        </div>
      </LayoutProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<Meta<typeof SettingsDropdown>>;

export const Default: Story = {
  args: {
    className:
      'w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default settings dropdown with waves background selected.',
      },
    },
  },
};

export const CustomStyledTrigger: Story = {
  args: {
    className:
      'w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-200 shadow-lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Settings dropdown with custom red circular trigger styling.',
      },
    },
  },
};
