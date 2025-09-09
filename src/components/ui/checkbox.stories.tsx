import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Checkbox } from "./checkbox";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A checkbox component built with Radix UI primitives. Supports controlled and uncontrolled modes with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      description: "The checked state of the checkbox",
      control: "boolean",
    },
    defaultChecked: {
      description: "The default checked state (uncontrolled)",
      control: "boolean",
    },
    disabled: {
      description: "Whether the checkbox is disabled",
      control: "boolean",
    },
    onCheckedChange: {
      description: "Callback when the checked state changes",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
  },
  args: {
    onCheckedChange: fn(),
  },
};

export default meta;
type Story = StoryObj<Meta<typeof Checkbox>>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Default unchecked checkbox.",
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

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox in checked state.",
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled checkbox (unchecked).",
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

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled checkbox in checked state.",
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

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Checkbox with an associated label. Clicking the label toggles the checkbox.",
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

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="interactive"
            checked={checked}
            onCheckedChange={(checked) => setChecked(!!checked)}
          />
          <label
            htmlFor="interactive"
            className="text-sm font-medium leading-none cursor-pointer"
          >
            Interactive checkbox
          </label>
        </div>
        <p className="text-sm text-gray-600">
          Status: {checked ? "Checked" : "Unchecked"}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive checkbox with state display. Demonstrates controlled usage.",
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

export const MultipleChoices: Story = {
  render: () => {
    const [selections, setSelections] = useState({
      react: false,
      vue: false,
      angular: false,
      svelte: false,
    });

    const handleChange =
      (key: keyof typeof selections) =>
      (checked: boolean | "indeterminate") => {
        setSelections((prev) => ({ ...prev, [key]: !!checked }));
      };

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-semibold">
          Select your favorite frameworks:
        </h3>
        <div className="space-y-3">
          {Object.entries(selections).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={value}
                onCheckedChange={handleChange(key as keyof typeof selections)}
              />
              <label
                htmlFor={key}
                className="text-sm leading-none cursor-pointer capitalize"
              >
                {key === "react"
                  ? "React"
                  : key === "vue"
                  ? "Vue.js"
                  : key === "angular"
                  ? "Angular"
                  : "Svelte"}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="text-sm font-medium">Selected:</p>
          <p className="text-sm text-gray-600">
            {Object.entries(selections)
              .filter(([, checked]) => checked)
              .map(([key]) => key)
              .join(", ") || "None"}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple checkboxes for selecting multiple options.",
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
  render: () => {
    const [formData, setFormData] = useState({
      newsletter: false,
      marketing: false,
      updates: false,
    });

    return (
      <div className="w-80 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Email Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, newsletter: !!checked }))
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="newsletter"
                className="text-sm font-medium cursor-pointer"
              >
                Newsletter
              </label>
              <p className="text-xs text-gray-500">
                Receive our weekly newsletter with the latest updates.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="marketing"
              checked={formData.marketing}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, marketing: !!checked }))
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="marketing"
                className="text-sm font-medium cursor-pointer"
              >
                Marketing emails
              </label>
              <p className="text-xs text-gray-500">
                Receive emails about new products and features.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="updates"
              checked={formData.updates}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, updates: !!checked }))
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="updates"
                className="text-sm font-medium cursor-pointer"
              >
                Security updates
              </label>
              <p className="text-xs text-gray-500">
                Important security and account updates.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t">
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => alert(JSON.stringify(formData, null, 2))}
          >
            Save Preferences
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Real-world form example with checkboxes for email preferences.",
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

export const CustomStyling: Story = {
  args: {
    className:
      "size-6 rounded-lg border-2 border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600",
  },
  decorators: [
    (Story) => (
      <div className="flex items-center space-x-2 p-5">
        <Story />
        <label className="text-sm font-medium text-purple-700">
          Custom styled checkbox
        </label>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Checkbox with custom styling including size, colors, and border radius.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox className="size-3" />
        <label className="text-xs">Small (12px)</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox />
        <label className="text-sm">Default (16px)</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox className="size-5" />
        <label className="text-base">Medium (20px)</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox className="size-6" />
        <label className="text-lg">Large (24px)</label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different checkbox sizes using custom size classes.",
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
