import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useState } from 'react';
import { Input } from './input';
import { RiSearchLine, RiEyeLine, RiEyeOffLine, RiUser3Line, RiMailLine } from '@remixicon/react';

const meta: Meta<typeof Input> = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible input component with support for different types, states, and custom styling. Built with proper accessibility and focus management.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'The input type',
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'file'],
    },
    placeholder: {
      description: 'Placeholder text',
      control: 'text',
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: 'boolean',
    },
    value: {
      description: 'The input value (controlled)',
      control: 'text',
    },
    defaultValue: {
      description: 'Default value (uncontrolled)',
      control: 'text',
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text',
    },
    onChange: {
      description: 'Change event handler',
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<Meta<typeof Input>>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default text input with placeholder.',
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Pre-filled value',
    placeholder: 'Enter text...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with a pre-filled value.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input state.',
      },
    },
  },
};

export const DisabledWithValue: Story = {
  args: {
    value: 'Cannot edit this',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input with value.',
      },
    },
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
  parameters: {
    docs: {
      description: {
        story: 'Email input type with appropriate validation.',
      },
    },
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input type with hidden characters.',
      },
    },
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '',
    min: 0,
    max: 100,
  },
  parameters: {
    docs: {
      description: {
        story: 'Number input with min/max constraints.',
      },
    },
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Search input type.',
      },
    },
  },
};

export const File: Story = {
  args: {
    type: 'file',
    accept: '.pdf,.doc,.docx',
  },
  parameters: {
    docs: {
      description: {
        story: 'File input with accepted file types.',
      },
    },
  },
};

const InteractiveComponent = () => {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-4 w-80">
      <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something..." />
      <div className="text-sm text-gray-600">
        <p>Value: {value || '(empty)'}</p>
        <p>Length: {value.length}</p>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive input with live value display.',
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="relative">
        <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input className="pl-10" placeholder="Search..." type="search" />
      </div>

      <div className="relative">
        <RiUser3Line className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input className="pl-10" placeholder="Username" />
      </div>

      <div className="relative">
        <RiMailLine className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input className="pl-10" placeholder="Email address" type="email" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with left-side icons for different purposes.',
      },
    },
  },
};

const PasswordWithToggleComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-80">
      <Input type={showPassword ? 'text' : 'password'} placeholder="Enter password" className="pr-10" />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        {showPassword ? <RiEyeOffLine className="w-4 h-4" /> : <RiEyeLine className="w-4 h-4" />}
      </button>
    </div>
  );
};

export const PasswordWithToggle: Story = {
  render: () => <PasswordWithToggleComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Password input with visibility toggle functionality.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-1 block">Small</label>
        <Input className="h-8 text-sm" placeholder="Small input" />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Default</label>
        <Input placeholder="Default input" />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Large</label>
        <Input className="h-12 text-base" placeholder="Large input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input sizes using custom height classes.',
      },
    },
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-1 block">Valid Input</label>
        <Input
          placeholder="This is valid"
          className="border-green-300 focus-visible:border-green-500 focus-visible:ring-green-500/20"
        />
        <p className="text-sm text-green-600 mt-1">✓ Looks good!</p>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Invalid Input</label>
        <Input placeholder="This has an error" aria-invalid />
        <p className="text-sm text-red-600 mt-1">✗ This field is required</p>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Warning Input</label>
        <Input
          placeholder="This has a warning"
          className="border-yellow-300 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20"
        />
        <p className="text-sm text-yellow-600 mt-1">⚠ Please double-check this value</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different validation states with custom styling and messages.',
      },
    },
  },
};

const FormExampleComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="w-96 p-6 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">User Information</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">First Name</label>
          <Input value={formData.firstName} onChange={handleChange('firstName')} placeholder="Enter your first name" />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Last Name</label>
          <Input value={formData.lastName} onChange={handleChange('lastName')} placeholder="Enter your last name" />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Email</label>
          <Input type="email" value={formData.email} onChange={handleChange('email')} placeholder="Enter your email" />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Age</label>
          <Input
            type="number"
            value={formData.age}
            onChange={handleChange('age')}
            placeholder="Enter your age"
            min="1"
            max="120"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => alert(JSON.stringify(formData, null, 2))}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export const FormExample: Story = {
  render: () => <FormExampleComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Complete form example with multiple input types and state management.',
      },
    },
  },
};
