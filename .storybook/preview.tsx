import type { Preview } from "@storybook/react-vite";
import "../src/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
  },

  decorators: [
    (Story) => (
      <div
        style={{ backgroundColor: "oklch(0.2084 0.0417 266.36)" }}
        className="rounded-lg"
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
