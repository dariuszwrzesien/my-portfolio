import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: 'bg-primary-background text-primary-inverted hover:bg-primary-hover hover:text-primary-hover-inverted',
        secondary: 'bg-slate-600 text-heading-foreground hover:bg-slate-500 hover:text-heading-foreground',
        outline:
          'border-1 border-slate-50 text-heading-foreground hover:border-slate-800 hover:bg-slate-800 hover:text-heading-foreground',
        success: 'bg-success-background text-success-inverted hover:bg-success-hover hover:text-success-hover-inverted',
        error: 'bg-error-background text-error-inverted hover:bg-error-hover hover:text-error-hover-inverted',
        warning: 'bg-warning-background text-warning-inverted hover:bg-warning-hover hover:text-warning-hover-inverted',
        link: 'text-link-foreground underline hover:text-link-hover-foreground',
      },
      size: {
        default: 'rounded-md h-10 px-6 py-2 has-[>svg]:px-3',
        sm: 'text-xs h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-3',
        lg: 'h-12 rounded-md px-8 has-[>svg]:px-4',
        icon: 'h-10 w-10 rounded-full p-2 has-[>svg]:p-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);
