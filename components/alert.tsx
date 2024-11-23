import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

type AlertProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

export function Alert(props: AlertProps, ref: React.Ref<HTMLDivElement>) {
  const { variant, ...properties } = props;
  const variants = { variant };
  const className = twMerge(alertVariants(variants), props.className);
  return <div className={className} role="alert" {...properties} ref={ref} />;
}

const alertVariants = cva("flex flex-col w-full rounded-md border px-4 py-3", {
  variants: {
    variant: {
      default: "border-stone-700 text-stone-700",
      error: "border-red-700 text-red-700 bg-red-50",
      success: "border-green-700 text-green-700",
      warning: "border-yellow-700 text-yellow-700",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

Alert.displayName = "Alert";

type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof alertTitleVariants>;

export function AlertTitle(props: AlertTitleProps, ref: React.Ref<HTMLHeadingElement>) {
  const { className, ...properties } = props;
  const classes = twMerge(alertTitleVariants(), className);
  return <h5 className={classes} {...properties} ref={ref} />;
}

const alertTitleVariants = cva("text-sm font-medium");

AlertTitle.displayName = "AlertTitle";

type AlertDescriptionProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertDescriptionVariants>;

export function AlertDescription(props: AlertDescriptionProps, ref: React.Ref<HTMLDivElement>) {
  const { className, ...properties } = props;
  const classes = twMerge(alertDescriptionVariants(), className);
  return <div className={classes} {...properties} ref={ref} />;
}

const alertDescriptionVariants = cva("text-sm");

AlertDescription.displayName = "AlertDescription";
