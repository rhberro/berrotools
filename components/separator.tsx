import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type SeparatorProps = React.BaseHTMLAttributes<HTMLDivElement> & VariantProps<typeof separatorVariants>;

export function Separator(props: SeparatorProps, ref: React.Ref<HTMLDivElement>) {
  const { className, ...properties } = props;
  const classes = twMerge(separatorVariants(), className);
  return <div className={classes} data-orientation="horizontal" role="separator" {...properties} ref={ref} />;
}

const separatorVariants = cva("border-stone-300 border-b w-full my-6");

Separator.displayName = "Separator";
