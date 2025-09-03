import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { LayoutProvider } from "../contexts";
import FooterDesktop from "./FooterDesktop";

const meta: Meta<typeof FooterDesktop> = {
  title: "Components/UI/FooterDesktop",
  component: FooterDesktop,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<Meta<typeof FooterDesktop>>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <LayoutProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Story />
        </MemoryRouter>
      </LayoutProvider>
    ),
  ],
};
