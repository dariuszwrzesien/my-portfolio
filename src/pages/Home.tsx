import { RiCheckboxCircleFill } from "@remixicon/react";
import { useState } from "react";
import { Button } from "../components/ui/button";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Typography showcase */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 py-hero px-section">
        <div className="max-w-4xl mx-auto space-y-component text-center">
          <h1 className="heading-hero text-white">Beautiful Typography</h1>
          <p className="body-large text-white/90 max-w-2xl mx-auto">
            <RiCheckboxCircleFill size={36} className="text-green-500" />
            Demonstrating a comprehensive typography system with semantic
            spacing, perfect font hierarchy, and readable text scales.
          </p>
          <button
            className="bg-white text-orange-600 px-component py-element rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            onClick={() => setCount(count + 1)}
          >
            Get Started • Count: {count}
          </button>
          <Button variant={"primary"} onClick={() => setCount(count + 1)}>
            Main Action • Count: {count}
          </Button>
        </div>
      </section>

      {/* Typography Examples Section */}
      <section className="py-section px-section">
        <div className="max-w-4xl mx-auto space-y-loose">
          {/* Headings */}
          <div className="space-y-component">
            <h2 className="heading-1 text-center">Typography Hierarchy</h2>
            <p className="body-large text-muted-foreground text-center max-w-2xl mx-auto">
              A complete type scale with semantic meaning, optimized for
              readability and visual hierarchy.
            </p>
          </div>

          {/* Font Samples */}
          <div className="grid gap-component md:grid-cols-2">
            {/* Headings showcase */}
            <div className="bg-card border rounded-lg p-component space-y-element">
              <h3 className="heading-2 text-card-foreground">Headings</h3>
              <div className="space-y-tight">
                <h1 className="heading-hero text-primary">Hero Text</h1>
                <h1 className="heading-1">Heading 1</h1>
                <h2 className="heading-2">Heading 2</h2>
                <h3 className="heading-3">Heading 3</h3>
                <h4 className="heading-4">Heading 4</h4>
              </div>
            </div>

            {/* Body text showcase */}
            <div className="bg-card border rounded-lg p-component space-y-element">
              <h3 className="heading-2 text-card-foreground">Body Text</h3>
              <div className="space-y-tight">
                <p className="body-large">
                  Large body text for emphasis and improved readability in key
                  sections.
                </p>
                <p className="body-text">
                  Regular body text for standard content. This is optimized for
                  comfortable reading.
                </p>
                <p className="caption-text text-muted-foreground">
                  Caption text for secondary information and metadata.
                </p>
                <p className="small-text text-muted-foreground">
                  Small text for fine print and additional details.
                </p>
              </div>
            </div>
          </div>

          {/* Font Families */}
          <div className="space-y-component">
            <h2 className="heading-2 text-center">Font Families</h2>
            <div className="grid gap-component md:grid-cols-3">
              <div className="bg-card border rounded-lg p-component space-y-element text-center">
                <h3 className="font-sans heading-3">Sans Serif</h3>
                <p className="font-sans body-text">
                  Clean and modern for UI elements and body text. Perfect for
                  digital interfaces.
                </p>
                <code className="font-sans text-sm">font-sans</code>
              </div>

              <div className="bg-card border rounded-lg p-component space-y-element text-center">
                <h3 className="font-serif heading-3">Serif</h3>
                <p className="font-serif body-text">
                  Elegant and readable for long-form content and editorial
                  design.
                </p>
                <code className="font-sans text-sm">font-serif</code>
              </div>

              <div className="bg-card border rounded-lg p-component space-y-element text-center">
                <h3 className="font-mono heading-3">Monospace</h3>
                <p className="font-mono body-text">
                  Perfect for code and technical content where character
                  alignment matters.
                </p>
                <code className="font-sans text-sm">font-mono</code>
              </div>
            </div>
          </div>

          {/* Typography in Practice */}
          <div className="space-y-component">
            <h2 className="heading-2 text-center">Typography in Practice</h2>
            <div className="bg-card border rounded-lg p-component space-y-element">
              <article className="prose max-w-none">
                <h3 className="heading-3">Article Example</h3>
                <p className="body-text">
                  This demonstrates how our typography system works in a real
                  content context. The spacing between elements creates a
                  natural reading rhythm, while the font hierarchy guides the
                  reader through the content structure.
                </p>

                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground body-text my-element">
                  "Good typography is invisible. When done well, it simply helps
                  communicate ideas clearly and beautifully."
                </blockquote>

                <h4 className="heading-4 mt-component">Key Features</h4>
                <ul className="space-y-tight body-text">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Semantic font sizes (hero, heading-1, body, etc.)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Optimal line heights for readability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Consistent spacing between elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Multiple font families for different use cases</span>
                  </li>
                </ul>

                <p className="body-text">
                  The system is built to scale across different devices and
                  screen sizes, ensuring your content looks great everywhere.
                </p>
              </article>
            </div>
          </div>

          {/* Interactive Typography */}
          <div className="space-y-component">
            <h2 className="heading-2 text-center">Interactive Elements</h2>
            <div className="grid gap-component md:grid-cols-2">
              <div className="bg-card border rounded-lg p-component space-y-element">
                <h3 className="heading-3">Buttons & Links</h3>
                <div className="space-y-tight">
                  <button className="bg-primary text-primary-foreground px-element py-tight rounded font-medium hover:bg-primary/90 transition-colors">
                    Primary Button
                  </button>
                  <br />
                  <button className="bg-secondary text-secondary-foreground px-element py-tight rounded font-medium hover:bg-secondary/90 transition-colors">
                    Secondary Button
                  </button>
                  <br />
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Link Example
                  </a>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-component space-y-element">
                <h3 className="heading-3">Code Examples</h3>
                <div className="space-y-tight">
                  <p className="body-text">
                    Inline code: <code>className="text-hero"</code>
                  </p>
                  <pre className="text-sm">
                    {`<h1 className="heading-hero">
  Hero Text
</h1>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-footer px-section">
        <div className="max-w-4xl mx-auto text-center">
          <p className="caption-text text-muted-foreground">
            Typography system built with Tailwind CSS v4 and semantic design
            tokens
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
