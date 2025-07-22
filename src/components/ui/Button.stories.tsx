import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "outline",
        "success",
        "error",
        "warning",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    asChild: {
      control: { type: "boolean" },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<Meta<typeof Button>>;

export const Example: Story = {
  args: {
    variant: "primary",
    children: "Primary button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success button",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link button",
  },
};
