import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type FieldSetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & VariantProps<typeof fieldsetVariants>;

export function FieldSet(props: FieldSetProps, ref: React.Ref<HTMLFieldSetElement>) {
  const { className, ...properties } = props;
  const classes = twMerge(fieldsetVariants(), className);
  return <fieldset className={classes} {...properties} ref={ref} />;
}

const fieldsetVariants = cva("flex flex-col gap-4");

FieldSet.displayName = "FieldSet";
