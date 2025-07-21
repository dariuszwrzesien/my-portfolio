import { Meta, StoryObj } from "@storybook/react";

const TypographyDemo = () => (
  <div className="space-y-8 p-6">
    <div>
      <h1 className="heading-hero mb-4">Typography System</h1>
      <p className="body-large text-muted-foreground mb-8">
        Our typography system with semantic font sizes, multiple font families,
        and FiraCode for code.
      </p>
    </div>

    {/* Semantic Typography Sizes */}
    <section className="space-y-4">
      <h2 className="heading-1">Semantic Typography</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h1 className="heading-hero">Hero Heading</h1>
          <code className="text-sm text-muted-foreground">
            .heading-hero • 4.5rem • font-display
          </code>
        </div>
        <div className="p-4 border rounded">
          <h1 className="heading-1">Heading 1</h1>
          <code className="text-sm text-muted-foreground">
            .heading-1 • 3rem • font-display
          </code>
        </div>
        <div className="p-4 border rounded">
          <h2 className="heading-2">Heading 2</h2>
          <code className="text-sm text-muted-foreground">
            .heading-2 • 2.25rem • font-display
          </code>
        </div>
        <div className="p-4 border rounded">
          <h3 className="heading-3">Heading 3</h3>
          <code className="text-sm text-muted-foreground">
            .heading-3 • 1.875rem • font-sans
          </code>
        </div>
        <div className="p-4 border rounded">
          <h4 className="heading-4">Heading 4</h4>
          <code className="text-sm text-muted-foreground">
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
          <code className="text-sm text-muted-foreground">
            .body-large • 1.125rem • font-sans
          </code>
        </div>
        <div className="p-4 border rounded">
          <p className="body-text">
            Regular body text for standard content. This is optimized for
            comfortable reading and is the most commonly used text style
            throughout the interface.
          </p>
          <code className="text-sm text-muted-foreground">
            .body-text • 1rem • font-sans
          </code>
        </div>
        <div className="p-4 border rounded">
          <p className="caption-text">
            Caption text for secondary information, metadata, and supplementary
            details that support the main content.
          </p>
          <code className="text-sm text-muted-foreground">
            .caption-text • 0.875rem • font-sans
          </code>
        </div>
        <div className="p-4 border rounded">
          <p className="small-text">
            Small text for fine print, legal text, and additional details that
            need to be present but not prominent.
          </p>
          <code className="text-sm text-muted-foreground">
            .small-text • 0.75rem • font-sans
          </code>
        </div>
      </div>
    </section>

    {/* Font Families */}
    <section className="space-y-4">
      <h2 className="heading-2">Font Families</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-4 border rounded">
          <h3 className="font-sans heading-3 mb-2">Sans Serif (Inter)</h3>
          <p className="font-sans body-text mb-2">
            The quick brown fox jumps over the lazy dog. Perfect for UI elements
            and body text.
          </p>
          <code className="text-sm text-muted-foreground">
            font-sans • Inter
          </code>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-serif heading-3 mb-2">
            Serif (Playfair Display)
          </h3>
          <p className="font-serif body-text mb-2">
            The quick brown fox jumps over the lazy dog. Elegant for long-form
            content and editorial design.
          </p>
          <code className="text-sm text-muted-foreground">
            font-serif • Playfair Display
          </code>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-mono heading-3 mb-2">Monospace (FiraCode)</h3>
          <p className="font-mono body-text mb-2">
            The quick brown fox jumps over the lazy dog. Perfect for code with
            beautiful programming ligatures.
          </p>
          <code className="text-sm text-muted-foreground">
            font-mono • Fira Code
          </code>
        </div>
      </div>
    </section>

    {/* Code Examples with FiraCode */}
    <section className="space-y-4">
      <h2 className="heading-2">Code Typography (FiraCode)</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h3 className="heading-3 mb-3">Inline Code</h3>
          <p className="body-text mb-2">
            Use <code>className="font-mono"</code> for inline code snippets with
            proper styling.
          </p>
          <code className="text-sm text-muted-foreground">
            code element with bg-muted styling
          </code>
        </div>
        <div className="p-4 border rounded">
          <h3 className="heading-3 mb-3">Code Blocks</h3>
          <pre className="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-4 rounded mb-2">
            {`// FiraCode ligatures in action
const arrow = () => value;
const comparison = a === b && c !== d;
const math = x ** 2 + y ** 2;
const logical = !x && !!y;`}
          </pre>
          <code className="text-sm text-muted-foreground">
            pre element with FiraCode ligatures
          </code>
        </div>
      </div>
    </section>

    {/* Text Utilities */}
    <section className="space-y-4">
      <h2 className="heading-2">Text Utilities</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <p className="body-text text-balance mb-2">
            This text uses text-balance for better typography with balanced line
            breaks and improved readability.
          </p>
          <code className="text-sm text-muted-foreground">.text-balance</code>
        </div>
        <div className="p-4 border rounded">
          <p className="body-text text-pretty mb-2">
            This text uses text-pretty for optimal line breaking and typography
            that looks great across different screen sizes.
          </p>
          <code className="text-sm text-muted-foreground">.text-pretty</code>
        </div>
      </div>
    </section>

    {/* Color Variations */}
    <section className="space-y-4">
      <h2 className="heading-2">Text Colors</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded space-y-2">
          <p className="body-text">Default foreground text color</p>
          <p className="body-text text-muted-foreground">
            Muted foreground for secondary text
          </p>
          <p className="body-text text-primary">
            Primary color for links and emphasis
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
      <h4 className="heading-4">Heading 4</h4>
      <p className="body-large">Large body text</p>
      <p className="body-text">Regular body text</p>
      <p className="caption-text">Caption text</p>
      <p className="small-text">Small text</p>
    </div>
  ),
};

export const FontFamilies: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="font-sans heading-2 mb-2">Sans Serif (Inter)</h2>
        <p className="font-sans body-text">
          Clean and modern Inter font for UI elements and body text. Perfect for
          interfaces and readable content.
        </p>
      </div>
      <div>
        <h2 className="font-serif heading-2 mb-2">Serif (Playfair Display)</h2>
        <p className="font-serif body-text">
          Elegant Playfair Display for long-form content and editorial design.
          Great for headings and sophisticated layouts.
        </p>
      </div>
      <div>
        <h2 className="font-mono heading-2 mb-2">Monospace (FiraCode)</h2>
        <p className="font-mono body-text">
          Perfect for code with beautiful programming ligatures and excellent
          readability. Supports === !== {"=>"} && || and more!
        </p>
      </div>
    </div>
  ),
};
