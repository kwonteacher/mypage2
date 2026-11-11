import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-lime text-[#0B0D0E] shadow-[0_0_24px_rgba(212,245,108,0.25)] hover:bg-lime-hover hover:shadow-[0_0_32px_rgba(212,245,108,0.4)]",
        outline:
          "border border-white/10 bg-transparent text-[#E8EAE9] hover:border-lime hover:text-lime hover:bg-white/[0.03]",
        secondary:
          "bg-[#1A1E20] text-[#E8EAE9] border border-white/5 hover:border-white/15 hover:bg-[#202528]",
        ghost:
          "text-[#E8EAE9] hover:text-lime hover:bg-white/[0.04]",
        link: "text-lime underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-14 rounded-full px-8 text-lg font-bold tracking-tight",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
