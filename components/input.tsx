import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

export function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const { className, ...properties } = props;
  const classes = twMerge(inputVariants(), className);
  return <input className={classes} {...properties} ref={ref} />;
}

const inputVariants = cva(
  "h-10 w-full px-3 py-2 transition-colors rounded-md font-normal text-sm text-stone-700 bg-stone-100 border border-stone-300 hover:border-stone-400 placeholder:text-stone-300 focus-visible:border-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-700 aria-[invalid=true]:bg-red-50 aria-[invalid=true]:placeholder:text-red-700 aria-[invalid=true]:placeholder:text-opacity-30"
);

Input.displayName = "Input";
