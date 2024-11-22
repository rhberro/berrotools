import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

import { Slot, SlotProps } from "./slot";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & SlotProps;

export function Button(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const { className, variant, size, slotted, ...properties } = props;
  const variants = { variant, size };
  const classes = twMerge(buttonVariants(variants), className);
  const Tag = slotted ? Slot : "button";
  return <Tag className={classes} {...properties} ref={ref} />;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-stone-700 text-white hover:bg-stone-600 active:bg-stone-500 focus-visible:ring-blue-600",
        outline:
          "bg-transparent text-stone-800 border border-stone-300 hover:border-stone-400 hover:bg-stone-100 active:bg-stone-200 focus-visible:ring-blue-600",
        ghost: "bg-transparent text-stone-800 hover:bg-stone-100 active:bg-stone-200 focus-visible:ring-blue-600",
      },
      size: {
        large: "px-4 py-2",
        medium: "px-3 py-2 text-sm",
        small: "px-2 py-1 text-xs",
      },
    },
    defaultVariants: { variant: "default", size: "medium" },
  }
);

Button.displayName = "Button";
