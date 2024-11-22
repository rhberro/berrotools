import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof checkboxVariants>;

export function Checkbox(props: CheckboxProps, ref: React.Ref<HTMLInputElement>) {
  const { className, value, ...properties } = props;
  const classes = twMerge(checkboxVariants(), className);
  return <input type="checkbox" className={classes} checked={!!value} {...properties} ref={ref} />;
}

const checkboxVariants = cva(
  "appearance-none w-4 h-4 cursor-pointer transition-colors rounded-sm border border-stone-300 bg-stone-100 hover:border-stone-400 checked:border-none checked:bg-stone-700 checked:border-stone-700 focus-visible:border-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-700 aria-[invalid=true]:bg-red-50 aria-[invalid=true]:checked:bg-red-700"
);

Checkbox.displayName = "Checkbox";
