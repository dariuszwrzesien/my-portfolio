import type { Meta, StoryObj } from "@storybook/react-vite";
import { cn } from "./libs/utils";

const colorCodeClass = "text-xs text-black bg-white";

const ColorSystem = () => (
  <div className="space-y-8 p-6">
    <div>
      <h1 className="text-4xl text-heading-foreground font-bold mb-2">
        OKLCH Color System
      </h1>
      <p className="text-lg text-white mb-8">
        My design system uses OKLCH color space for better perceptual uniformity
        and consistency.
      </p>
      {/* Background Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Background Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded border bg-background">
            <p className="text-white font-medium">Background</p>
            <code className={colorCodeClass}>oklch(0.2084 0.0417 266.36)</code>
            <p className="text-xs text-white mt-1">Main background color</p>
          </div>
          <div className="p-4 rounded border bg-backdrop">
            <p className="text-heading-foreground font-medium">Backdrop</p>
            <code className={colorCodeClass}>oklch(0.1298 0.0425 265.13)</code>
            <p className="text-xs text-white mt-1">Backdrop</p>
          </div>
          <div className="p-4 rounded border bg-foreground">
            <p className="text-black font-medium">Foreground</p>
            <code className={colorCodeClass}>oklch(0.7038 0.0402 256.99)</code>
            <p className="text-xs text-black mt-1">Foreground</p>
          </div>
        </div>
      </section>
      {/* Primary Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Primary Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded border bg-primary-background">
            <p className="text-black font-medium">Primary background</p>
            <code className={colorCodeClass}>oklch(0.8337 0.1256 67.19)</code>
            <p className="text-xs text-black mt-1">Primary background</p>
          </div>
          <div className="p-4 rounded border bg-primary-foreground">
            <p className="text-black font-medium">Primary foreground</p>
            <code className={colorCodeClass}>oklch(0.985 0 0)</code>
            <p className="text-xs text-black mt-1">Primary foreground</p>
          </div>
          <div className="p-4 rounded border bg-primary-hover">
            <p className="text-black font-medium">Primary hover</p>
            <code className={colorCodeClass}>oklch(0.8999 0.0763 70.44)</code>
            <p className="text-xs text-black mt-1">Primary hover</p>
          </div>
          <div className="p-4 rounded border bg-primary-hover-inverted">
            <p className="text-white font-medium">Primary hover inverted</p>
            <code className={colorCodeClass}>oklch(0.1298 0.0425 265.13)</code>
            <p className="text-xs text-white mt-1">Primary hover inverted</p>
          </div>
        </div>
      </section>

      {/* Secondary Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Secondary Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded border bg-secondary">
            <p className="text-black font-medium">Secondary</p>
            <code className={colorCodeClass}>oklch(0.97 0 0)</code>
            <p className="text-xs text-black mt-1">Secondary</p>
          </div>
          <div className="p-4 rounded border bg-secondary-foreground">
            <p className="text-white font-medium">Secondary foreground</p>
            <code className={colorCodeClass}>oklch(0.205 0 0)</code>
            <p className="text-xs text-white mt-1">Secondary foreground</p>
          </div>
        </div>
      </section>
      {/* Appearance / Slate */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Appearance / Slate</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-slate-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-slate-50`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-slate-100`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-slate-200`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-slate-300`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-slate-400`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-slate-500`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-slate-600`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-slate-700`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-slate-800`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-slate-900`}</code>
          </div>
          <div className="p-4 rounded border bg-slate-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-slate-950`}</code>
          </div>
        </div>
      </section>
      {/* Primary / Orange */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Primary / Orange</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-orange-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-orange-50`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-orange-100`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-orange-200`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-orange-300`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-orange-400`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-orange-500`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-orange-600`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-orange-700`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-orange-800`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-orange-900`}</code>
          </div>
          <div className="p-4 rounded border bg-orange-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-orange-950`}</code>
          </div>
        </div>
      </section>
      {/* Secondary / Teal */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Secondary / Teal</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-teal-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-teal-50`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-teal-100`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-teal-200`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-teal-300`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-teal-400`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-teal-500`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-teal-600`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-teal-700`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-teal-800`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-teal-900`}</code>
          </div>
          <div className="p-4 rounded border bg-teal-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-teal-950`}</code>
          </div>
        </div>
      </section>
      {/* Secondary / Indigo */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Secondary / Indigo</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-indigo-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-indigo-50`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-indigo-100`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-indigo-200`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-indigo-300`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-indigo-400`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-indigo-500`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-indigo-600`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-indigo-700`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-indigo-800`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-indigo-900`}</code>
          </div>
          <div className="p-4 rounded border bg-indigo-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-indigo-950`}</code>
          </div>
        </div>
      </section>
      {/* Secondary / Rose */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Secondary / Rose</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-rose-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-rose-50`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-rose-100`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-rose-200`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-rose-300`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-rose-400`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-rose-500`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-rose-600`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-rose-700`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-rose-800`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-rose-900`}</code>
          </div>
          <div className="p-4 rounded border bg-rose-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-rose-950`}</code>
          </div>
        </div>
      </section>
      {/* Accent / Purple */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Accent / Purple</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-purple-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-purple-50`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-purple-100`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-purple-200`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-purple-300`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-purple-400`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-purple-500`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-purple-600`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-purple-700`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-purple-800`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-purple-900`}</code>
          </div>
          <div className="p-4 rounded border bg-purple-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-purple-950`}</code>
          </div>
        </div>
      </section>
      {/* Neutral color */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Neutral color</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-neutral-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-neutral-50`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-neutral-100`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-neutral-200`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-neutral-300`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-neutral-400`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-neutral-500`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-neutral-600`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-neutral-700`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-neutral-800`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-neutral-900`}</code>
          </div>
          <div className="p-4 rounded border bg-neutral-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-neutral-950`}</code>
          </div>
        </div>
      </section>
      {/* Semantic color */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Semantic color</h2>
        <p className="mb-4">
          Semantic colors communicate meaning, helping users quickly understand
          status, warnings, errors, and success states in the UI.
        </p>
        <h3 className="text-lg my-4">Error / Red</h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-red-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-red-50`}</code>
          </div>
          <div className="p-4 rounded border bg-red-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-red-100`}</code>
          </div>
          <div className="p-4 rounded border bg-red-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-red-200`}</code>
          </div>
          <div className="p-4 rounded border bg-red-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-red-300`}</code>
          </div>
          <div className="p-4 rounded border bg-red-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-red-400`}</code>
          </div>
          <div className="p-4 rounded border bg-red-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-red-500`}</code>
          </div>
          <div className="p-4 rounded border bg-red-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-red-600`}</code>
          </div>
          <div className="p-4 rounded border bg-red-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-red-700`}</code>
          </div>
          <div className="p-4 rounded border bg-red-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-red-800`}</code>
          </div>
          <div className="p-4 rounded border bg-red-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-red-900`}</code>
          </div>
          <div className="p-4 rounded border bg-red-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-red-950`}</code>
          </div>
        </div>
        <h3 className="text-lg my-4">Success / Green</h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-green-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-green-50`}</code>
          </div>
          <div className="p-4 rounded border bg-green-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-green-100`}</code>
          </div>
          <div className="p-4 rounded border bg-green-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-green-200`}</code>
          </div>
          <div className="p-4 rounded border bg-green-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-green-300`}</code>
          </div>
          <div className="p-4 rounded border bg-green-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-green-400`}</code>
          </div>
          <div className="p-4 rounded border bg-green-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-green-500`}</code>
          </div>
          <div className="p-4 rounded border bg-green-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-green-600`}</code>
          </div>
          <div className="p-4 rounded border bg-green-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-green-700`}</code>
          </div>
          <div className="p-4 rounded border bg-green-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-green-800`}</code>
          </div>
          <div className="p-4 rounded border bg-green-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-green-900`}</code>
          </div>
          <div className="p-4 rounded border bg-green-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-green-950`}</code>
          </div>
        </div>
        <h3 className="text-lg my-4">Warning / Yellow</h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="p-4 rounded border bg-yellow-50">
            <p className="text-black font-medium">50</p>
            <code className={colorCodeClass}>{`bg-yellow-50`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-100">
            <p className="text-black font-medium">100</p>
            <code className={colorCodeClass}>{`bg-yellow-100`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-200">
            <p className="text-black font-medium">200</p>
            <code className={colorCodeClass}>{`bg-yellow-200`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-300">
            <p className="text-black font-medium">300</p>
            <code className={colorCodeClass}>{`bg-yellow-300`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-400">
            <p className="text-black font-medium">400</p>
            <code className={colorCodeClass}>{`bg-yellow-400`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-500">
            <p className="text-black font-medium">500</p>
            <code className={colorCodeClass}>{`bg-yellow-500`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-600">
            <p className="text-white font-medium">600</p>
            <code className={colorCodeClass}>{`bg-yellow-600`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-700">
            <p className="text-white font-medium">700</p>
            <code className={colorCodeClass}>{`bg-yellow-700`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-800">
            <p className="text-white font-medium">800</p>
            <code className={colorCodeClass}>{`bg-yellow-800`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-900">
            <p className="text-white font-medium">900</p>
            <code className={colorCodeClass}>{`bg-yellow-900`}</code>
          </div>
          <div className="p-4 rounded border bg-yellow-950">
            <p className="text-white font-medium">950</p>
            <code className={colorCodeClass}>{`bg-yellow-950`}</code>
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
