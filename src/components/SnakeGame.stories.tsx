import type { Meta, StoryObj } from "@storybook/react";
import SnakeGame from "./SnakeGame";

const meta: Meta<typeof SnakeGame> = {
  title: "Components/SnakeGame",
  component: SnakeGame,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A classic Snake game built with Phaser.js. Control the snake with arrow keys or WASD to eat food and grow longer. Press P to pause/unpause the game. Avoid hitting walls or yourself!",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      description: "Width of the game canvas",
    },
    height: {
      control: { type: "number" },
      description: "Height of the game canvas",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 640,
    height: 480,
  },
};

export const Small: Story = {
  args: {
    width: 400,
    height: 300,
  },
};

export const Large: Story = {
  args: {
    width: 800,
    height: 600,
  },
};

export const WithCustomStyling: Story = {
  args: {
    width: 640,
    height: 480,
    className: "shadow-lg rounded-lg",
  },
};
