import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import ProjectsSidebarLink from "./ProjectsSidebarLink";
import { ProjectCategory } from "../libs/enums";
import { getIcon } from "../libs/utils";

const meta: Meta<typeof ProjectsSidebarLink> = {
  title: "Components/ProjectsSidebarLink",
  component: ProjectsSidebarLink,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A sidebar link component that displays a checkbox with a technology icon and label. Used as filter options in the projects sidebar to allow filtering by technology categories.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The project category/technology name",
      control: "select",
      options: Object.values(ProjectCategory),
    },
    icon: {
      description: "React node representing the technology icon",
      control: false,
    },
    onChange: {
      description: "Callback function triggered when the checkbox is clicked",
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<Meta<typeof ProjectsSidebarLink>>;

export const Default: Story = {
  args: {
    label: ProjectCategory.React,
    icon: getIcon(ProjectCategory.React),
  },
  decorators: [
    (Story) => (
      <div className="w-48 p-4 border border-gray-200 rounded">
        <Story />
      </div>
    ),
  ],
};

export const HoverStates: Story = {
  args: {
    label: ProjectCategory.Vue,
    icon: getIcon(ProjectCategory.Vue),
  },
  decorators: [
    (Story) => (
      <div className="w-48 p-4 border border-gray-200 rounded">
        <p className="text-sm text-gray-600 mb-2">
          Hover over the label to see effects:
        </p>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the hover effects on the label and checkbox.",
      },
    },
  },
};

export const SidebarLinkGroup: Story = {
  render: () => (
    <div className="w-64 p-4 border border-gray-200 rounded">
      <h3 className="font-semibold mb-4">Filter by Technology</h3>
      <div className="space-y-4">
        <ProjectsSidebarLink
          label={ProjectCategory.React}
          icon={getIcon(ProjectCategory.React)}
          onChange={fn()}
        />
        <ProjectsSidebarLink
          label={ProjectCategory.Vue}
          icon={getIcon(ProjectCategory.Vue)}
          onChange={fn()}
        />
        <ProjectsSidebarLink
          label={ProjectCategory.Angular}
          icon={getIcon(ProjectCategory.Angular)}
          onChange={fn()}
        />
        <ProjectsSidebarLink
          label={ProjectCategory.NodeJS}
          icon={getIcon(ProjectCategory.NodeJS)}
          onChange={fn()}
        />
        <ProjectsSidebarLink
          label={ProjectCategory.TypeScript}
          icon={getIcon(ProjectCategory.TypeScript)}
          onChange={fn()}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows multiple sidebar links together as they appear in the actual sidebar.",
      },
    },
  },
};
