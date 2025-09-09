import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "./card";
import {
  RiHeartLine,
  RiShareLine,
  RiBookmarkLine,
  RiMoreLine,
} from "@remixicon/react";

const meta: Meta<typeof Card> = {
  title: "Components/UI/Card",
  component: Card,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A flexible card component with header, content, footer, and action sections. Built with composition pattern for maximum flexibility.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS classes to apply to the card",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof Card>>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a description of the card content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content area of the card. You can put any content
          here.
        </p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic card with title, description, and content.",
      },
    },
  },
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>
          Card featuring an action button in the header.
        </CardDescription>
        <CardAction>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <RiMoreLine className="w-5 h-5" />
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          The action area is positioned in the top-right corner of the card
          header.
        </p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card with an action button positioned in the header area.",
      },
    },
  },
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card includes a footer section.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content goes here with additional footer actions below.</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-100 rounded transition-colors">
            <RiHeartLine className="w-4 h-4" />
            Like
          </button>
          <button className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-100 rounded transition-colors">
            <RiShareLine className="w-4 h-4" />
            Share
          </button>
          <button className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-100 rounded transition-colors">
            <RiBookmarkLine className="w-4 h-4" />
            Save
          </button>
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card with footer containing action buttons.",
      },
    },
  },
};

export const CompleteCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Complete Card Example</CardTitle>
        <CardDescription>
          A card with all possible sections included.
        </CardDescription>
        <CardAction>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <RiMoreLine className="w-5 h-5" />
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>This card demonstrates all available sections working together.</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Featured content area</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-100 rounded transition-colors">
              <RiHeartLine className="w-4 h-4" />
              24
            </button>
            <button className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-100 rounded transition-colors">
              <RiShareLine className="w-4 h-4" />
              Share
            </button>
          </div>
          <span className="text-sm text-gray-500">2 hours ago</span>
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete card example with header, action, content, and footer sections.",
      },
    },
  },
};

export const ProjectCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Portfolio Website</CardTitle>
        <CardDescription>React • TypeScript • Tailwind CSS</CardDescription>
        <CardAction>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Active
            </span>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm">
            A modern portfolio website showcasing projects and skills with
            interactive elements.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              React
            </span>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              TypeScript
            </span>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              Tailwind
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Project
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
              GitHub
            </button>
          </div>
          <span className="text-xs text-gray-500">Updated 1 day ago</span>
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Project card example showing how to structure project information.",
      },
    },
  },
};

export const ContentOnlyCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardContent>
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold mb-2">Simple Content Card</h3>
          <p className="text-gray-600">
            Sometimes you just need content without headers or footers.
          </p>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Minimal card with only content section.",
      },
    },
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="w-full">
          <CardHeader>
            <CardTitle>Card {i}</CardTitle>
            <CardDescription>Description for card number {i}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Content for card {i}. Each card maintains consistent spacing and
              layout.
            </p>
          </CardContent>
          <CardFooter>
            <button className="text-sm bg-gray-100 px-3 py-2 rounded hover:bg-gray-200 transition-colors">
              Action {i}
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple cards in a responsive grid layout.",
      },
    },
  },
};
