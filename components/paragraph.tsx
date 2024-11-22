import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type ParagraphProps = React.BaseHTMLAttributes<HTMLParagraphElement> & VariantProps<typeof paragraphVariants>;

export function Paragraph(props: ParagraphProps, ref: React.Ref<HTMLParagraphElement>) {
  const { className, size, ...properties } = props;
  const variants = { size };
  const classes = twMerge(paragraphVariants(variants), className);
  return <p className={classes} {...properties} ref={ref} />;
}

const paragraphVariants = cva("text-stone-600 transition-colors", {
  variants: {
    size: {
      small: "text-xs",
      medium: "text-sm",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

Paragraph.displayName = "Paragraph";
