# Typography System Reference

## Overview

This typography system provides a comprehensive set of semantic font sizes, families, and utilities designed for modern web applications. It's built on top of Tailwind CSS v4 with shadcn/ui integration.

## Font Families

### Available Font Stacks

```tsx
// Sans-serif (default)
<p className="font-sans">Clean, modern interface text</p>

// Serif
<p className="font-serif">Elegant, readable long-form content</p>

// Monospace
<p className="font-mono">Code and technical content</p>

// Display
<p className="font-display">Headers and brand elements</p>
```

### Font Family CSS Variables

- `--font-sans`: Inter + system fallbacks
- `--font-serif`: Playfair Display + system fallbacks
- `--font-mono`: JetBrains Mono + system fallbacks
- `--font-display`: Cal Sans + fallbacks

## Semantic Typography Classes

### Headings

```tsx
// Hero text - 4.5rem with tight tracking
<h1 className="heading-hero">Portfolio Title</h1>

// Primary heading - 3rem
<h1 className="heading-1">Page Title</h1>

// Secondary heading - 2.25rem
<h2 className="heading-2">Section Title</h2>

// Tertiary heading - 1.875rem
<h3 className="heading-3">Subsection Title</h3>

// Quaternary heading - 1.5rem
<h4 className="heading-4">Component Title</h4>
```

### Body Text

```tsx
// Large body text - 1.125rem
<p className="body-large">Emphasis content, intros</p>

// Regular body text - 1rem (default)
<p className="body-text">Standard content</p>

// Caption text - 0.875rem
<p className="caption-text">Secondary information</p>

// Small text - 0.75rem
<p className="small-text">Fine print, metadata</p>
```

## Font Sizes (Tailwind Classes)

### Semantic Sizes

- `text-hero`: 4.5rem (72px) - Hero sections
- `text-heading-1`: 3rem (48px) - Main headings
- `text-heading-2`: 2.25rem (36px) - Section headings
- `text-heading-3`: 1.875rem (30px) - Subsection headings
- `text-heading-4`: 1.5rem (24px) - Component headings
- `text-body`: 1rem (16px) - Regular text
- `text-body-lg`: 1.125rem (18px) - Large body text
- `text-caption`: 0.875rem (14px) - Captions
- `text-small`: 0.75rem (12px) - Fine print

### Extended Numeric Sizes

- `text-10xl`: 10rem (160px)
- `text-11xl`: 12rem (192px)
- `text-12xl`: 14rem (224px)

## Font Weights

```tsx
<p className="font-thin">100</p>
<p className="font-extralight">200</p>
<p className="font-light">300</p>
<p className="font-normal">400</p>
<p className="font-medium">500</p>
<p className="font-semibold">600</p>
<p className="font-bold">700</p>
<p className="font-extrabold">800</p>
<p className="font-black">900</p>
```

## Letter Spacing

```tsx
<p className="tracking-tightest">-0.075em</p>
<p className="tracking-tighter">-0.05em</p>
<p className="tracking-tight">-0.025em</p>
<p className="tracking-normal">0em</p>
<p className="tracking-wide">0.025em</p>
<p className="tracking-wider">0.05em</p>
<p className="tracking-widest">0.1em</p>
```

## Line Heights

```tsx
<p className="leading-none">1</p>
<p className="leading-tight">1.25</p>
<p className="leading-snug">1.375</p>
<p className="leading-normal">1.5</p>
<p className="leading-relaxed">1.625</p>
<p className="leading-loose">2</p>
<p className="leading-extra-loose">2.5</p>
<p className="leading-12">3rem</p>
<p className="leading-14">3.5rem</p>
<p className="leading-16">4rem</p>
```

## Text Utilities

```tsx
// Text wrapping (modern CSS)
<p className="text-balance">Balanced text wrapping</p>
<p className="text-pretty">Pretty text wrapping</p>

// Text alignment
<p className="text-left">Left aligned</p>
<p className="text-center">Center aligned</p>
<p className="text-right">Right aligned</p>
<p className="text-justify">Justified</p>
```

## Usage Patterns

### Hero Section

```tsx
<section className="py-hero px-section text-center">
  <h1 className="heading-hero text-white mb-component">
    Welcome to Our Platform
  </h1>
  <p className="body-large text-white/90 max-w-2xl mx-auto">
    Discover amazing features with beautiful typography
  </p>
</section>
```

### Article Layout

```tsx
<article className="max-w-3xl mx-auto space-y-component">
  <h1 className="heading-1">Article Title</h1>
  <p className="body-large text-muted-foreground">
    Article introduction with larger text
  </p>

  <h2 className="heading-2 mt-loose">Section Heading</h2>
  <p className="body-text">
    Regular article content with optimal reading experience
  </p>

  <blockquote className="border-l-4 border-primary pl-4 italic">
    <p className="body-text text-muted-foreground">
      "Typography is the craft of endowing human language with a durable visual
      form."
    </p>
  </blockquote>
</article>
```

### Card Component

```tsx
<div className="bg-card border rounded-lg p-component space-y-element">
  <h3 className="heading-3">Card Title</h3>
  <p className="body-text text-muted-foreground">
    Card description with proper hierarchy
  </p>
  <p className="caption-text">Additional metadata</p>
</div>
```

## Responsive Typography

The system includes responsive considerations:

```tsx
// Responsive font sizes
<h1 className="text-2xl md:text-4xl lg:text-hero">
  Responsive Hero
</h1>

// Responsive spacing
<section className="py-8 md:py-section lg:py-hero">
  <h1 className="heading-1 md:heading-hero">
    Responsive Section
  </h1>
</section>
```

## CSS Variables

All typography values are available as CSS custom properties:

- Font sizes: `--text-hero`, `--text-heading-1`, etc.
- Line heights: `--text-hero--line-height`, etc.
- Font families: `--font-sans`, `--font-serif`, etc.
- Font weights: `--font-thin` through `--font-black`

## Best Practices

1. **Use semantic classes** over arbitrary values when possible
2. **Maintain hierarchy** with consistent heading levels
3. **Consider reading distance** - larger text for further viewing
4. **Test accessibility** - ensure sufficient contrast
5. **Be consistent** - stick to the defined scale
6. **Responsive design** - adjust sizes for different devices

## Integration with Spacing

Typography works seamlessly with the spacing system:

```tsx
<div className="space-y-component">
  <h2 className="heading-2">Section Title</h2>
  <p className="body-text">Content with semantic spacing</p>
</div>
```

This creates a cohesive design system where typography and spacing work together harmoniously.
