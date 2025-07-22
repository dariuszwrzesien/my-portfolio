import type { Meta, StoryObj } from "@storybook/react-vite";
import HeaderDesktop from "./HeaderDesktop";

const meta: Meta<typeof HeaderDesktop> = {
  title: "Components/UI/HeaderDesktop",
  component: HeaderDesktop,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<Meta<typeof HeaderDesktop>>;

export const Example: Story = {
  args: {
    children: <HeaderDesktop />,
  },
};
