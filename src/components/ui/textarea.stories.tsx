import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import { Textarea } from "./textarea";
import { Label } from "./label";

const meta: Meta<typeof Textarea> = {
  title: "Components/UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A textarea component for multi-line text input with proper accessibility and styling. Supports auto-resizing and various configurations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "Placeholder text",
      control: "text",
    },
    disabled: {
      description: "Whether the textarea is disabled",
      control: "boolean",
    },
    rows: {
      description: "Number of visible text lines",
      control: "number",
    },
    value: {
      description: "The textarea value (controlled)",
      control: "text",
    },
    defaultValue: {
      description: "Default value (uncontrolled)",
      control: "text",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
    onChange: {
      description: "Change event handler",
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<Meta<typeof Textarea>>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
  },
  parameters: {
    docs: {
      description: {
        story: "Default textarea with placeholder text.",
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    defaultValue:
      "This is some pre-filled content in the textarea.\n\nIt spans multiple lines to demonstrate the multi-line capability.",
    placeholder: "Enter your message...",
  },
  parameters: {
    docs: {
      description: {
        story: "Textarea with pre-filled multi-line content.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled textarea state.",
      },
    },
  },
};

export const DisabledWithValue: Story = {
  args: {
    value:
      "This content cannot be edited because the textarea is disabled.\n\nYou can select the text but not modify it.",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled textarea with content.",
      },
    },
  },
};

export const WithRows: Story = {
  args: {
    placeholder: "This textarea has a fixed height of 6 rows",
    rows: 6,
  },
  parameters: {
    docs: {
      description: {
        story: "Textarea with fixed number of rows.",
      },
    },
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-96 p-5">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        placeholder="Enter your message here..."
        rows={4}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Textarea with associated label.",
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const maxLength = 500;

    return (
      <div className="space-y-4 w-96 p-5">
        <div className="space-y-2">
          <Label htmlFor="interactive">Message</Label>
          <Textarea
            id="interactive"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type your message..."
            rows={4}
            maxLength={maxLength}
          />
        </div>
        <div className="text-sm text-gray-600">
          <p>
            Character count: {value.length} / {maxLength}
          </p>
          <p>
            Word count: {value.trim() ? value.trim().split(/\s+/).length : 0}
          </p>
          <p>Line count: {value.split("\n").length}</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive textarea with character, word, and line counting.",
      },
    },
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      subject: "",
      message: "",
    });

    return (
      <div className="w-96 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, subject: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="What is this about?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="form-message">Message</Label>
            <Textarea
              id="form-message"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Please describe your inquiry in detail..."
              rows={5}
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => alert(JSON.stringify(formData, null, 2))}
          >
            Send Message
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Complete contact form with textarea for message input.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-96 p-5">
      <div>
        <Label className="text-sm font-medium mb-1 block">Small (3 rows)</Label>
        <Textarea placeholder="Small textarea" rows={3} className="text-sm" />
      </div>
      <div>
        <Label className="text-sm font-medium mb-1 block">
          Medium (5 rows)
        </Label>
        <Textarea placeholder="Medium textarea" rows={5} />
      </div>
      <div>
        <Label className="text-sm font-medium mb-1 block">Large (8 rows)</Label>
        <Textarea placeholder="Large textarea" rows={8} className="text-base" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different textarea sizes with varying row counts.",
      },
    },
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 w-96 p-5">
      <div>
        <Label className="text-sm font-medium mb-1 block text-green-700">
          Valid Message ✓
        </Label>
        <Textarea
          value="This is a well-formed message with appropriate length and content."
          className="border-green-300 focus-visible:border-green-500 focus-visible:ring-green-500/20"
          rows={3}
        />
        <p className="text-sm text-green-600 mt-1">Message looks good!</p>
      </div>

      <div>
        <Label className="text-sm font-medium mb-1 block text-red-700">
          Invalid Message ✗
        </Label>
        <Textarea
          value=""
          placeholder="This field is required"
          aria-invalid
          rows={3}
        />
        <p className="text-sm text-red-600 mt-1">Message is required</p>
      </div>

      <div>
        <Label className="text-sm font-medium mb-1 block text-yellow-700">
          Warning ⚠
        </Label>
        <Textarea
          value="Short msg"
          className="border-yellow-300 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20"
          rows={3}
        />
        <p className="text-sm text-yellow-600 mt-1">
          Message seems quite short. Consider adding more detail.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different validation states with custom styling and messages.",
      },
    },
  },
};
