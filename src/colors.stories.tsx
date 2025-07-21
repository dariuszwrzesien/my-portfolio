import type { Meta, StoryObj } from "@storybook/react-vite";

const ColorSystem = () => (
  <div className="space-y-8 p-6">
    <div>
      <h1 className="text-4xl font-bold mb-2">OKLCH Color System</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Our design system uses OKLCH color space for better perceptual
        uniformity and consistency.
      </p>

      {/* Background Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Background Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.2084 0.0417 266.36)" }}
          >
            <p className="text-white font-medium">Background</p>
            <code className="text-xs text-gray-200">
              oklch(0.2084 0.0417 266.36)
            </code>
            <p className="text-xs text-gray-300 mt-1">Main background color</p>
          </div>
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(1 0 0)" }}
          >
            <p className="text-black font-medium">Card</p>
            <code className="text-xs text-gray-600">oklch(1 0 0)</code>
            <p className="text-xs text-gray-500 mt-1">Card background</p>
          </div>
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.97 0 0)" }}
          >
            <p className="text-black font-medium">Muted</p>
            <code className="text-xs text-gray-600">oklch(0.97 0 0)</code>
            <p className="text-xs text-gray-500 mt-1">Muted background</p>
          </div>
        </div>
      </section>

      {/* Primary Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Primary Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.8337 0.1256 67.19)" }}
          >
            <p className="text-black font-medium">Primary</p>
            <code className="text-xs text-gray-700">
              oklch(0.8337 0.1256 67.19)
            </code>
            <p className="text-xs text-gray-600 mt-1">Brand primary color</p>
          </div>
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.1298 0.0425 265.13)" }}
          >
            <p className="text-white font-medium">Primary Inverted</p>
            <code className="text-xs text-gray-200">
              oklch(0.1298 0.0425 265.13)
            </code>
            <p className="text-xs text-gray-300 mt-1">Primary inverted text</p>
          </div>
        </div>
      </section>

      {/* Text Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Text Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded border bg-gray-100">
            <p
              style={{ color: "oklch(0.7038 0.0402 256.99)" }}
              className="font-medium"
            >
              Foreground
            </p>
            <code className="text-xs text-gray-600">
              oklch(0.7038 0.0402 256.99)
            </code>
            <p className="text-xs text-gray-500 mt-1">Main text color</p>
          </div>
          <div className="p-4 rounded border bg-gray-100">
            <p
              style={{ color: "oklch(0.9842 0.0034 247.86)" }}
              className="font-medium"
            >
              Heading
            </p>
            <code className="text-xs text-gray-600">
              oklch(0.9842 0.0034 247.86)
            </code>
            <p className="text-xs text-gray-500 mt-1">Heading text</p>
          </div>
          <div className="p-4 rounded border bg-gray-100">
            <p style={{ color: "oklch(0.556 0 0)" }} className="font-medium">
              Muted
            </p>
            <code className="text-xs text-gray-600">oklch(0.556 0 0)</code>
            <p className="text-xs text-gray-500 mt-1">Muted text</p>
          </div>
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Semantic Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.7289 0.2119 147.82)" }}
          >
            <p className="text-black font-medium">Success</p>
            <code className="text-xs text-gray-700">
              oklch(0.7289 0.2119 147.82)
            </code>
            <p className="text-xs text-gray-600 mt-1">Success states</p>
          </div>
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.6378 0.2373 25.44)" }}
          >
            <p className="text-white font-medium">Error</p>
            <code className="text-xs text-gray-200">
              oklch(0.6378 0.2373 25.44)
            </code>
            <p className="text-xs text-gray-300 mt-1">Error states</p>
          </div>
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.8337 0.1256 67.19)" }}
          >
            <p className="text-black font-medium">Warning</p>
            <code className="text-xs text-gray-700">
              oklch(0.8337 0.1256 67.19)
            </code>
            <p className="text-xs text-gray-600 mt-1">Warning states</p>
          </div>
        </div>
      </section>

      {/* Accent Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Accent Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.2662 0.0789 35.91)" }}
          >
            <p className="text-white font-medium">Orange</p>
            <code className="text-xs text-gray-200">
              oklch(0.2662 0.0789 35.91)
            </code>
          </div>
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.2766 0.046 192.53)" }}
          >
            <p className="text-white font-medium">Teal</p>
            <code className="text-xs text-gray-200">
              oklch(0.2766 0.046 192.53)
            </code>
          </div>
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.2571 0.0908 281.44)" }}
          >
            <p className="text-white font-medium">Indigo</p>
            <code className="text-xs text-gray-200">
              oklch(0.2571 0.0908 281.44)
            </code>
          </div>
          <div
            className="p-4 rounded border"
            style={{ backgroundColor: "oklch(0.2909 0.1487 302.99)" }}
          >
            <p className="text-white font-medium">Purple</p>
            <code className="text-xs text-gray-200">
              oklch(0.2909 0.1487 302.99)
            </code>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const meta: Meta<typeof ColorSystem> = {
  title: "Design System/Colors",
  component: ColorSystem,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Complete color system using OKLCH color space for our design system.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof ColorSystem>>;

export const ColorPalette: Story = {};
