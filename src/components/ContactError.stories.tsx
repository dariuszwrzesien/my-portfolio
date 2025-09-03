import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import ContactError from "./ContactError";

const meta: Meta<typeof ContactError> = {
  title: "Components/UI/ContactError",
  component: ContactError,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "An error state component displayed when contact form submission fails. Shows an error icon, message, and a button to try sending again.",
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
type Story = StoryObj<Meta<typeof ContactError>>;

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
          "Shows the error component centered in a container, as it would typically appear in a form.",
      },
    },
  },
};

export const FullScreenError: Story = {
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
        story: "Demonstrates the error component in a full-screen error state.",
      },
    },
  },
};

export const WithCustomBackground: Story = {
  decorators: [
    (Story) => (
      <div className="h-96 bg-indigo-800 flex items-center justify-center p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Example with a custom background to test contrast and visibility.",
      },
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    onSendMessage: () => {
      alert("Redirecting back to form...");
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
