import type { Meta, StoryObj } from "@storybook/react-vite";
import TextBlock from "./TextBlock";

const meta: Meta<typeof TextBlock> = {
  title: "Components/TextBlock",
  component: TextBlock,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A text block component that displays multiline text with line numbers. Each line is numbered sequentially and supports HTML content through dangerouslySetInnerHTML.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      description:
        "The text content to display. Supports multiline strings separated by \\n and HTML content.",
      control: "text",
    },
    className: {
      description: "Additional CSS classes to apply to the section element",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof TextBlock>>;

export const Default: Story = {
  args: {
    text: "Welcome to my portfolio!\nI'm a software developer with passion for creating amazing web experiences.\nFeel free to explore my projects and get in touch.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic text block with simple multiline content and line numbers.",
      },
    },
  },
};

export const SingleLine: Story = {
  args: {
    text: "This is a single line of text.",
  },
  parameters: {
    docs: {
      description: {
        story: "Text block with only one line of content.",
      },
    },
  },
};

export const EmptyText: Story = {
  args: {
    text: "",
  },
  parameters: {
    docs: {
      description: {
        story: "Text block with empty text content.",
      },
    },
  },
};

export const CodeLikeContent: Story = {
  args: {
    text: "const greeting = 'Hello, World!';\nconsole.log(greeting);\n\nfunction calculate(a, b) {\n  return a + b;\n}\n\nconst result = calculate(5, 3);",
    className: "font-mono text-sm",
  },
  parameters: {
    docs: {
      description: {
        story: "Text block displaying code-like content with monospace font.",
      },
    },
  },
};

export const HTMLContent: Story = {
  args: {
    text: "This is <strong>bold text</strong> and this is <em>italic text</em>.\nYou can also have <a href='#'>links</a> and <code>inline code</code>.\n<span style='color: blue;'>Colored text</span> is also supported.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Text block that demonstrates HTML content rendering with various tags.",
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    text: "Line 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nLine 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nLine 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco.\nLine 4: Duis aute irure dolor in reprehenderit in voluptate velit esse.\nLine 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa.\nLine 6: Qui officia deserunt mollit anim id est laborum.\nLine 7: Sed ut perspiciatis unde omnis iste natus error sit voluptatem.\nLine 8: Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.\nLine 9: Quae ab illo inventore veritatis et quasi architecto beatae.\nLine 10: Vitae dicta sunt explicabo nemo enim ipsam voluptatem.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Text block with longer content to demonstrate line numbering with multiple lines.",
      },
    },
  },
};

export const LargeLineNumbers: Story = {
  args: {
    text: Array.from(
      { length: 25 },
      (_, i) => `Line ${i + 1}: This is content for line number ${i + 1}`
    ).join("\n"),
  },
  decorators: [
    (Story) => (
      <div className="max-h-80 overflow-y-auto border border-gray-200 rounded">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Text block with many lines to demonstrate line numbering with larger numbers. Scrollable container.",
      },
    },
  },
};

export const SpecialCharacters: Story = {
  args: {
    text: "Special characters test: !@#$%^&*()\nUnicode: 🚀 ⭐ 💻 🎨 🔥\nMath symbols: ∑ ∆ π ∞ ≈ ≠\nQuotes: \"double quotes\" and 'single quotes'\nHTML entities: &lt;tag&gt; &amp; &copy; &trade;",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Text block with various special characters, Unicode symbols, and HTML entities.",
      },
    },
  },
};
