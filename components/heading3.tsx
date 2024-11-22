import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type Heading3Props = React.BaseHTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading3Variants>;

export function Heading3(props: Heading3Props, ref: React.Ref<HTMLHeadingElement>) {
  const { className, ...properties } = props;
  const classes = twMerge(heading3Variants(), className);
  return <h3 className={classes} {...properties} ref={ref} />;
}

const heading3Variants = cva("text-stone-700 text-xl font-medium");

Heading3.displayName = "Heading3";
