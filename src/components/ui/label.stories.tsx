import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./label";
import { Input } from "./input";
import { Checkbox } from "./checkbox";
import { RiAsterisk } from "@remixicon/react";

const meta: Meta<typeof Label> = {
  title: "Components/UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A label component built with Radix UI primitives. Provides proper accessibility for form controls and supports custom styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: {
      description: "The ID of the form control this label is associated with",
      control: "text",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
    children: {
      description: "Label content",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof Label>>;

export const Default: Story = {
  args: {
    children: "Default Label",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic label component.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Label properly associated with an input field.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">I agree to the terms and conditions</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Label associated with a checkbox.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export const Required: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="required-field" className="text-gray-700">
        Full Name
        <RiAsterisk className="w-3 h-3 text-red-500 ml-1" />
      </Label>
      <Input id="required-field" placeholder="Enter your full name" required />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Required field label with asterisk indicator.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export const Optional: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="optional-field" className="text-gray-700">
        Middle Name
        <span className="text-gray-500 font-normal ml-2">(optional)</span>
      </Label>
      <Input id="optional-field" placeholder="Enter your middle name" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Optional field label with indicator.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="password" className="text-gray-700">
        Password
      </Label>
      <Input id="password" type="password" placeholder="Enter password" />
      <p className="text-xs text-gray-500">
        Must be at least 8 characters with letters and numbers
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Label with helper text description.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export const FormExample: Story = {
  render: () => (
    <div className="w-96 p-6 border border-gray-200 rounded-lg space-y-4">
      <h3 className="text-lg font-semibold">Contact Form</h3>

      <div className="space-y-2">
        <Label htmlFor="contact-name" className="text-gray-700">
          Name
          <RiAsterisk className="w-3 h-3 text-red-500 ml-1" />
        </Label>
        <Input id="contact-name" placeholder="Your full name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email" className="text-gray-700">
          Email
          <RiAsterisk className="w-3 h-3 text-red-500 ml-1" />
        </Label>
        <Input
          id="contact-email"
          type="email"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-phone" className="text-gray-700">
          Phone Number
          <span className="text-gray-500 font-normal ml-2">(optional)</span>
        </Label>
        <Input id="contact-phone" type="tel" placeholder="+1 (555) 123-4567" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter" className="text-gray-700">
          Subscribe to our newsletter
        </Label>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Submit
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete form example showing various label usages.",
      },
    },
  },
};

export const DisabledStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="disabled-input" className="text-gray-400">
          Disabled Field
        </Label>
        <Input id="disabled-input" placeholder="This is disabled" disabled />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checkbox" disabled />
        <Label htmlFor="disabled-checkbox" className="text-gray-400">
          Disabled checkbox option
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Labels with disabled form controls.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export const InlineLabels: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <div className="flex items-center space-x-4">
        <Label htmlFor="inline1" className="w-24 text-right">
          First Name:
        </Label>
        <Input id="inline1" placeholder="John" className="flex-1" />
      </div>

      <div className="flex items-center space-x-4">
        <Label htmlFor="inline2" className="w-24 text-right">
          Last Name:
        </Label>
        <Input id="inline2" placeholder="Doe" className="flex-1" />
      </div>

      <div className="flex items-center space-x-4">
        <Label htmlFor="inline3" className="w-24 text-right">
          Email:
        </Label>
        <Input
          id="inline3"
          type="email"
          placeholder="john@example.com"
          className="flex-1"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inline form layout with aligned labels.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="valid" className="text-green-700">
          Valid Field ✓
        </Label>
        <Input
          id="valid"
          value="valid@example.com"
          className="border-green-300 focus-visible:border-green-500"
        />
        <p className="text-xs text-green-600">Email format is correct</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="invalid" className="text-red-700">
          Invalid Field ✗
        </Label>
        <Input
          id="invalid"
          value="invalid-email"
          className="border-red-300 focus-visible:border-red-500"
          aria-invalid
        />
        <p className="text-xs text-red-600">
          Please enter a valid email address
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="warning" className="text-yellow-700">
          Warning Field ⚠
        </Label>
        <Input
          id="warning"
          value="test@temp-mail.com"
          className="border-yellow-300 focus-visible:border-yellow-500"
        />
        <p className="text-xs text-yellow-600">
          Temporary email addresses may not receive notifications
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Labels styled for different validation states.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};
