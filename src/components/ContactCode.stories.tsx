import type { Meta, StoryObj } from "@storybook/react-vite";
import ContactCode from "./ContactCode";

const meta: Meta<typeof ContactCode> = {
  title: "Components/ContactCode",
  component: ContactCode,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A code display component that shows contact form data formatted as JavaScript code. Used to visualize the contact form submission in a developer-friendly format.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "The name field from the contact form",
      control: "text",
    },
    email: {
      description: "The email field from the contact form",
      control: "text",
    },
    message: {
      description: "The message field from the contact form",
      control: "text",
    },
    className: {
      description: "Additional CSS classes to apply to the component",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof ContactCode>>;

export const Default: Story = {
  args: {
    name: "John Doe",
    email: "john.doe@example.com",
    message:
      "Hello, I would like to discuss a potential project collaboration.",
  },
};

export const ShortMessage: Story = {
  args: {
    name: "Jane Smith",
    email: "jane@company.com",
    message: "Quick question about your services.",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the component with a short message.",
      },
    },
  },
};

export const LongMessage: Story = {
  args: {
    name: "Michael Johnson",
    email: "michael.johnson@enterprise.com",
    message:
      "I am reaching out regarding a large-scale web development project that my company is planning to undertake. We are looking for an experienced developer who can handle complex React applications with modern tooling and best practices. The project involves building a comprehensive dashboard with data visualization, user management, and real-time updates. We would appreciate the opportunity to discuss this further and learn more about your experience and availability.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the component handles long messages with text truncation.",
      },
    },
  },
};

export const MultilineMessage: Story = {
  args: {
    name: "Sarah Wilson",
    email: "sarah.wilson@startup.io",
    message:
      "Hi there!\n\nI hope this message finds you well.\n\nI'm interested in your portfolio and would love to connect.\n\nBest regards,\nSarah",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how newlines in messages are handled (converted to spaces).",
      },
    },
  },
};

export const LongEmailAddress: Story = {
  args: {
    name: "Alexandra Rodriguez-Martinez",
    email: "alexandra.rodriguez.martinez@very-long-company-name.com",
    message: "I'd like to schedule a consultation.",
  },
  parameters: {
    docs: {
      description: {
        story: "Tests the component with long name and email address.",
      },
    },
  },
};

export const SpecialCharacters: Story = {
  args: {
    name: "François Müller",
    email: "françois.müller@société.fr",
    message:
      "Bonjour! Je suis intéressé par vos services. Pouvez-vous me contacter? Merci!",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the component with special characters and non-English text.",
      },
    },
  },
};

export const MinimalData: Story = {
  args: {
    name: "A",
    email: "a@b.co",
    message: "Hi",
  },
  parameters: {
    docs: {
      description: {
        story: "Tests the component with minimal data.",
      },
    },
  },
};

export const EmptyFields: Story = {
  args: {
    name: "",
    email: "",
    message: "",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows how the component handles empty fields.",
      },
    },
  },
};
