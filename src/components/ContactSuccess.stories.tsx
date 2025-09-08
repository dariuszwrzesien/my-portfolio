import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import ContactSuccess from "./ContactSuccess";

const meta: Meta<typeof ContactSuccess> = {
  title: "Components/ContactSuccess",
  component: ContactSuccess,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A success state component displayed when contact form submission is successful. Shows a thank you message and a button to send another message.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onSendMessage: {
      description:
        "Callback function triggered when the send new message button is clicked",
    },
  },
  args: {
    onSendMessage: fn(),
  },
};

export default meta;
type Story = StoryObj<Meta<typeof ContactSuccess>>;

export const Default: Story = {};

export const CenteredLayout: Story = {
  decorators: [
    (Story) => (
      <div className="h-96 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Shows the success component centered in a container, as it would typically appear after form submission.",
      },
    },
  },
};

export const FullScreenSuccess: Story = {
  decorators: [
    (Story) => (
      <div className="h-screen flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Demonstrates the success component in a full-screen success state.",
      },
    },
  },
};

export const WithCustomBackground: Story = {
  decorators: [
    (Story) => (
      <div className="h-96 bg-purple-800 flex items-center justify-center p-8 rounded-lg border border-green-200">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Example with a green background to emphasize the success state.",
      },
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    onSendMessage: () => {
      alert("Redirecting to new contact form...");
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example that shows an alert when the button is clicked.",
      },
    },
  },
};

export const WithSuccessIcon: Story = {
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-800"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Enhanced version with a success checkmark icon above the component.",
      },
    },
  },
};

export const AccessibilityFocus: Story = {
  decorators: [
    (Story) => (
      <div className="h-96 flex items-center justify-center">
        <div className="p-4 focus-within:ring-2 focus-within:ring-green-500 rounded">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Demonstrates focus states for accessibility testing.",
      },
    },
  },
};

export const MultipleSuccessStates: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">
          Different Success Scenarios
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4 border border-white rounded-lg bg-green-700">
          <h4 className="text-sm font-medium mb-2 text-primary-foreground text-center">
            Contact Form Success
          </h4>
          <ContactSuccess onSendMessage={fn()} />
        </div>

        <div className="p-4 border border-white rounded-lg bg-indigo-500">
          <h4 className="text-sm font-medium mb-2 text-primary-inverted text-center">
            Newsletter Subscription
          </h4>
          <ContactSuccess onSendMessage={fn()} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the component could be used in different success scenarios.",
      },
    },
  },
};
