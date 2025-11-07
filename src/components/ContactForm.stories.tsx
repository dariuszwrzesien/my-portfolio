import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import ContactForm from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A comprehensive contact form component with validation, email integration, and error handling. Uses React Hook Form with Zod validation and EmailJS for sending emails.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onSuccess: {
      description: 'Callback function triggered when form submission is successful',
    },
    onError: {
      description: 'Callback function triggered when form submission fails',
    },
    onChange: {
      description: 'Callback function triggered when any form field value changes',
    },
  },
  args: {
    onSuccess: fn(),
    onError: fn(),
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<Meta<typeof ContactForm>>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl mx-auto p-6">
        <Story />
      </div>
    ),
  ],
};

export const ValidationStates: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Try these validation scenarios:</h3>
          <ul className="text-sm space-y-1 mb-6">
            <li>• Leave name empty (min 2 characters required)</li>
            <li>• Enter invalid email format</li>
            <li>• Enter message shorter than 5 characters</li>
            <li>• Try exceeding max length limits</li>
          </ul>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Includes instructions for testing various validation scenarios.',
      },
    },
  },
};

export const AccessibilityFocus: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-6 focus-within:ring-2 focus-within:ring-blue-500 rounded-lg">
        <p className="text-sm text-gray-600 mb-4">Tab through the form to test keyboard navigation and focus states.</p>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates keyboard navigation and focus states for accessibility testing.',
      },
    },
  },
};
