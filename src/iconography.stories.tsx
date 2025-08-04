import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Ri24HoursFill, Ri24HoursLine } from "@remixicon/react";

const icons = [
  { name: "Beer", component: <Ri24HoursFill size={48} /> },
  { name: "Coffee", component: <Ri24HoursLine size={48} /> },
  { name: "Apple", component: <Ri24HoursFill size={48} /> },
];

const IconographyDemo = () => (
  <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
    {icons.map(({ name, component }) => (
      <div key={name} style={{ textAlign: "center" }}>
        {component}
        <div>{name}</div>
      </div>
    ))}
  </div>
);

const meta: Meta<typeof IconographyDemo> = {
  title: "Design System/Iconography",
  component: IconographyDemo,
  parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          "Complete typography system with semantic font sizes, multiple font families (Inter, Playfair Display, FiraCode), and utility classes.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconographyDemo>;

export const Iconography: Story = {
  render: () => <IconographyDemo />,
};
