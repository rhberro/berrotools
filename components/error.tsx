import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type ErrorProps = React.BaseHTMLAttributes<HTMLSpanElement> & VariantProps<typeof errorProps>;

export function Error(props: ErrorProps, ref: React.Ref<HTMLSpanElement>) {
  const { className, ...properties } = props;
  const classes = twMerge(errorProps(), className);
  return <span className={classes} role="alert" {...properties} ref={ref} />;
}

const errorProps = cva("text-red-700 text-sm");

Error.displayName = "Error";
