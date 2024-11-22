import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof labelVariants>;

export function Label(props: LabelProps, ref: React.Ref<HTMLLabelElement>) {
  const { className, inline, ...properties } = props;
  const variants = { inline };
  const classes = twMerge(labelVariants(variants), className);
  return <label className={classes} {...properties} ref={ref} />;
}

const labelVariants = cva(
  "flex flex-col text-sm text-stone-600 has-[input]:gap-2 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-70",
  {
    variants: {
      inline: {
        true: "flex-row",
      },
    },
    defaultVariants: {
      inline: false,
    },
  }
);

Label.displayName = "Label";
