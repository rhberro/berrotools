import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type Heading1Props = React.BaseHTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading1Variants>;

export function Heading1(props: Heading1Props, ref: React.Ref<HTMLHeadingElement>) {
  const { className, ...properties } = props;
  const classes = twMerge(heading1Variants(), className);
  return <h1 className={classes} {...properties} ref={ref} />;
}

const heading1Variants = cva("text-stone-700 text-3xl font-semibold");

Heading1.displayName = "Heading1";
