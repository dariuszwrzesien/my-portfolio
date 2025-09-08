import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import ProjectsSidebar from "./ProjectsSidebar";
import { ProjectCategory } from "../libs/enums";

const meta: Meta<typeof ProjectsSidebar> = {
  title: "Components/ProjectsSidebar",
  component: ProjectsSidebar,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A sidebar component for the projects page that displays filterable technology categories. Each category is a checkbox that allows users to filter projects by technology stack.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    categories: {
      description: "Array of project categories to display as filter options",
      control: "object",
    },
    onChange: {
      description:
        "Callback function triggered when a category filter is toggled",
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<Meta<typeof ProjectsSidebar>>;

export const Default: Story = {
  args: {
    categories: [
      ProjectCategory.HTML,
      ProjectCategory.CSS,
      ProjectCategory.React,
      ProjectCategory.Vue,
      ProjectCategory.Angular,
      ProjectCategory.NodeJS,
      ProjectCategory.PHP,
    ],
  },
  decorators: [
    (Story) => (
      <div className="h-96 w-64">
        <Story />
      </div>
    ),
  ],
};

export const AllCategories: Story = {
  args: {
    categories: [
      ProjectCategory.HTML,
      ProjectCategory.CSS,
      ProjectCategory.React,
      ProjectCategory.Redux,
      ProjectCategory.Vue,
      ProjectCategory.Angular,
      ProjectCategory.NodeJS,
      ProjectCategory.PHP,
      ProjectCategory.JavaScript,
      ProjectCategory.TypeScript,
      ProjectCategory.TailwindCSS,
      ProjectCategory.Storybook,
    ],
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-64">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Shows all available technology categories in the sidebar.",
      },
    },
  },
};
