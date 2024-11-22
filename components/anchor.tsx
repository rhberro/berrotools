import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  VariantProps<typeof anchorVariants>;

export function Anchor(props: AnchorProps, ref: React.Ref<HTMLAnchorElement>) {
  const { className, size, ...properties } = props;
  const variants = { size };
  const classes = twMerge(anchorVariants(variants), className);
  return <Link className={classes} {...properties} ref={ref} />;
}

const anchorVariants = cva(
  "text-stone-600 hover:text-stone-800 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded",
  {
    variants: {
      size: { small: "text-xs", medium: "text-sm", large: "text-lg" },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

Anchor.displayName = "Anchor";
