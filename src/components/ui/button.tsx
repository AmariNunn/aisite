import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-sm hover:from-red-700 hover:to-red-600 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5",
        outline:
          "border border-blue-300 bg-white text-blue-700 shadow-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-800 hover:border-blue-400",
        secondary:
          "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-800 shadow-sm hover:from-gray-300 hover:to-gray-200 hover:shadow hover:scale-[1.02] hover:-translate-y-0.5",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
