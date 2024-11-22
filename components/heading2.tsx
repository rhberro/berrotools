import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type Heading2Props = React.BaseHTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading2Variants>;

export function Heading2(props: Heading2Props, ref: React.Ref<HTMLHeadingElement>) {
  const { className, ...properties } = props;
  const classes = twMerge(heading2Variants(), className);
  return <h2 className={classes} {...properties} ref={ref} />;
}

const heading2Variants = cva("text-stone-700 text-2xl font-medium");

Heading2.displayName = "Heading2";
