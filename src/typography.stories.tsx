import { Meta, StoryObj } from "@storybook/react";

const TypographyDemo = () => (
  <div className="space-y-8 p-6">
    <div className="text-center">
      <h1 className="mb-16">Typography System</h1>
      <p>font-family</p>
      <h2 className="heading-2 mb-4 text-white">Fira Code</h2>
      <p className="text-sm bg-slate-700">Appearance - Monospaced</p>
      <p className="text-sm bg-slate-800">Technology - Variable</p>
      <p className="text-sm bg-slate-900">Sans Serif</p>
    </div>

    {/* Semantic Typography Sizes */}
    <section className="space-y-4">
      <h2 className="heading-2">Semantic Typography</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h1 className="heading-hero">Hero Heading</h1>
          <code className="text-sm text-heading-foreground">
            .heading-hero • 4.5rem • font-display
          </code>
        </div>
        <div className="p-4 border rounded">
          <h1 className="heading-1">Heading 1</h1>
          <code className="text-sm text-heading-foreground">
            .heading-1 • 3rem • font-display
          </code>
        </div>
        <div className="p-4 border rounded">
          <h2 className="heading-2">Heading 2</h2>
          <code className="text-sm text-heading-foreground">
            .heading-2 • 2.25rem • font-display
          </code>
        </div>
        <div className="p-4 border rounded">
          <h3 className="heading-3">Heading 3</h3>
          <code className="text-sm text-heading-foreground">
            .heading-3 • 1.875rem • font-sans
          </code>
        </div>
        <div className="p-4 border rounded">
          <h4 className="heading-4">Heading 4</h4>
          <code className="text-sm text-heading-foreground">
            .heading-4 • 1.5rem • font-sans
          </code>
        </div>
      </div>
    </section>

    {/* Body Text */}
    <section className="space-y-4">
      <h2 className="heading-2">Body Text</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <p className="body-large">
            Large body text for emphasis and improved readability in key
            sections. Perfect for introductions and important content.
          </p>
          <code className="text-sm text-heading-foreground">
            .body-large • 1.125rem • font-sans
          </code>
        </div>
        <div className="p-4 border rounded">
          <p className="body-text">
            Regular body text for standard content. This is optimized for
            comfortable reading and is the most commonly used text style
            throughout the interface.
          </p>
          <code className="text-sm text-heading-foreground">
            .body-text • 1rem • font-sans
          </code>
        </div>
        <div className="p-4 border rounded">
          <p className="caption-text">
            Caption text for secondary information, metadata, and supplementary
            details that support the main content.
          </p>
          <code className="text-sm text-heading-foreground">
            .caption-text • 0.875rem • font-sans
          </code>
        </div>
        <div className="p-4 border rounded">
          <p className="small-text">
            Small text for fine print, legal text, and additional details that
            need to be present but not prominent.
          </p>
          <code className="text-sm text-heading-foreground">
            .small-text • 0.75rem • font-sans
          </code>
        </div>
      </div>
    </section>

    {/* Font Families */}
    <section className="space-y-4">
      <h2 className="heading-2">Font Families</h2>
      <div className="grid gap-4 md:grid-cols-1">
        <div className="p-4 border rounded">
          <h3 className="font-sans heading-3 mb-2">Fira Code</h3>
          <p className="font-sans body-text mb-2">
            Fira Code is a monospaced font with beautiful programming ligatures.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <code className="text-sm text-muted-foreground">
            Block of code with FiraCode ligatures. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </code>
        </div>
      </div>
    </section>

    {/* Color Variations */}
    <section className="space-y-4">
      <h2 className="heading-2">Text Colors</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded space-y-2">
          <p className="body-text">Default foreground text color</p>
          <p className="body-text text-heading-foreground">
            Heading foreground for headings and important text
          </p>
          <p className="body-text text-slate-950 bg-white">
            Dark text on light background for high contrast
          </p>
        </div>
      </div>
    </section>
  </div>
);

const meta: Meta<typeof TypographyDemo> = {
  title: "Design System/Typography",
  component: TypographyDemo,
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

type Story = StoryObj<typeof TypographyDemo>;

export const TypographySystem: Story = {};

export const SemanticSizes: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h1 className="heading-hero">Hero Heading</h1>
      <h1 className="heading-1">Heading 1</h1>
      <h2 className="heading-2">Heading 2</h2>
      <h3 className="heading-3">Heading 3</h3>
      <h4 className="heading-4 mb-16">Heading 4</h4>
      <p className="body-large">
        Large body text
        <br />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </span>
      </p>
      <p className="body-text">
        Regular body text
        <br />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </span>
      </p>
      <p className="caption-text">
        Caption text
        <br />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </span>
      </p>
      <p className="small-text">
        Small text
        <br />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </span>
      </p>
    </div>
  ),
};
