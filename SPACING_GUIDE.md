# Semantic Spacing Reference

## Available Semantic Spacing Classes

Based on your `tailwind.config.ts`, here are the semantic spacing classes you can use:

### Padding Classes

```tsx
// Section-level spacing (large areas)
<div className="p-section">     {/* 5rem all sides */}
<div className="py-section">    {/* 5rem top/bottom */}
<div className="px-section">    {/* 5rem left/right */}

// Hero section spacing (extra large)
<div className="py-hero">       {/* 8rem top/bottom */}
<div className="px-hero">       {/* 8rem left/right */}

// Component-level spacing (medium)
<div className="p-component">   {/* 2rem all sides */}
<div className="py-component">  {/* 2rem top/bottom */}

// Element-level spacing (standard)
<div className="p-element">     {/* 1rem all sides */}
<div className="px-element">    {/* 1rem left/right */}

// Tight spacing (small)
<div className="p-tight">       {/* 0.5rem all sides */}
<div className="py-tight">      {/* 0.5rem top/bottom */}

// Footer spacing
<div className="py-footer">     {/* 4rem top/bottom */}
```

### Margin Classes

```tsx
// Same naming convention for margins
<div className="m-section">     {/* 5rem all sides */}
<div className="mt-component">  {/* 2rem top */}
<div className="mb-element">    {/* 1rem bottom */}
<div className="mx-loose">      {/* 3rem left/right */}
<div className="my-hero">       {/* 8rem top/bottom */}
```

### Gap Classes (for Flexbox/Grid)

```tsx
<div className="gap-tight">     {/* 0.5rem */}
<div className="gap-normal">    {/* 1rem */}
<div className="gap-loose">     {/* 2rem */}
<div className="gap-wide">      {/* 3rem */}

// Also works with specific directions
<div className="gap-x-component gap-y-element">
```

### Space Between Classes

```tsx
<div className="space-y-tight">     {/* 0.5rem between children */}
<div className="space-y-element">   {/* 1rem between children */}
<div className="space-y-component"> {/* 2rem between children */}
<div className="space-y-loose">     {/* 3rem between children */}
<div className="space-x-section">   {/* 5rem between children horizontally */}
```

## Usage Examples

### Layout Structure

```tsx
// Page layout with semantic spacing
<div className="min-h-screen">
  {/* Hero section */}
  <section className="py-hero px-section">
    <div className="space-y-component">
      <h1>Hero Title</h1>
      <p>Hero description</p>
    </div>
  </section>

  {/* Content section */}
  <section className="py-section px-section">
    <div className="space-y-loose">
      <h2>Section Title</h2>

      {/* Card grid */}
      <div className="grid gap-component md:grid-cols-3">
        <div className="p-component space-y-element">
          <h3>Card Title</h3>
          <p>Card content</p>
          <button className="px-element py-tight">Button</button>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-footer px-section">
    <p>Footer content</p>
  </footer>
</div>
```

### Component Patterns

```tsx
// Card component
<div className="bg-card p-component space-y-element">
  <h3>Card Title</h3>
  <p>Card description</p>
  <div className="space-x-tight">
    <button className="px-element py-tight">Primary</button>
    <button className="px-element py-tight">Secondary</button>
  </div>
</div>

// Form with semantic spacing
<form className="space-y-component">
  <div className="space-y-tight">
    <label>Field Label</label>
    <input className="p-element" />
  </div>

  <div className="space-y-tight">
    <label>Another Field</label>
    <textarea className="p-element"></textarea>
  </div>

  <button className="px-component py-element">Submit</button>
</form>
```

## Responsive Considerations

You can combine semantic spacing with responsive prefixes:

```tsx
<div className="p-element md:p-component lg:p-section">
  Responsive padding that grows on larger screens
</div>

<div className="space-y-tight md:space-y-element lg:space-y-component">
  Responsive spacing between children
</div>
```

## When to Use Each Spacing

- **`tight`** (0.5rem): Form fields, buttons, small UI elements
- **`element`** (1rem): Standard component padding, list items
- **`component`** (2rem): Cards, panels, larger UI components
- **`loose`** (3rem): Section breaks, emphasis spacing
- **`section`** (5rem): Page sections, major layout areas
- **`footer`** (4rem): Footer padding
- **`hero`** (8rem): Hero sections, major page headers

This creates a consistent spacing system throughout your application!
