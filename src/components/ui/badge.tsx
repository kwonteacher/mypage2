import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-lime/30 bg-lime/10 text-lime hover:bg-lime/20",
        secondary:
          "border border-white/10 bg-[#1A1E20] text-[#E8EAE9] hover:border-lime/40 hover:text-lime",
        outline:
          "border border-white/15 text-[#D0D6D6] hover:border-lime hover:text-lime",
        solid:
          "bg-lime text-[#0B0D0E] font-bold shadow-[0_0_16px_rgba(212,245,108,0.2)]",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
