# My Portfolio

A modern, interactive personal portfolio website showcasing my projects, skills, and professional experience as a developer. Built with cutting-edge web technologies, the site features animated backgrounds, responsive design, and an integrated contact form.

## ✨ Features

- 🎨 **Interactive Background Effects** - Dynamic visual effects powered by Vanta.js
- 📱 **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎯 **Project Showcase** - Filterable project gallery with detailed case studies
- 📧 **Contact Form** - Integrated email functionality using EmailJS
- 🎭 **Component Library** - Built with shadcn/ui for consistent, accessible UI
- 📖 **Storybook Integration** - Interactive component documentation and testing
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- ♿ **Accessibility First** - WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

### Core

- **[React 19](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[Vite](https://vitejs.dev)** - Build tool and dev server
- **[React Router](https://reactrouter.com)** - Client-side routing

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com)** - Unstyled, accessible components
- **[Remix Icon](https://remixicon.com)** - Icon library

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com)** - Form state management
- **[Zod](https://zod.dev)** - Schema validation
- **[EmailJS](https://www.emailjs.com)** - Email service integration

### Development Tools

- **[ESLint](https://eslint.org)** - Code linting
- **[Prettier](https://prettier.io)** - Code formatting
- **[Storybook](https://storybook.js.org)** - Component development & documentation
- **[Vitest](https://vitest.dev)** - Unit testing framework
- **[Playwright](https://playwright.dev)** - E2E testing

### Effects & Animation

- **[Vanta.js](https://www.vantajs.com)** - Animated background effects

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build locally
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors automatically
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run storybook        # Start Storybook on port 6006
npm run build-storybook  # Build Storybook for production
```

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/      # React components
│   │   └── ui/         # shadcn/ui components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── contexts/       # React context providers
│   ├── data/           # Static data and content
│   ├── libs/           # Utilities and types
│   └── main.tsx        # Application entry point
├── public/             # Static assets
│   ├── fonts/         # Custom fonts
│   └── images/        # Image assets
└── dist/              # Production build output
```

## 🎨 Component Development

This project uses Storybook for component development and documentation. To view and develop components in isolation:

```bash
npm run storybook
```

Visit `http://localhost:6006` to browse the component library.

## 🏗️ Building for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and TypeScript
