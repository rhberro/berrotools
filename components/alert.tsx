import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

type AlertProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

export function Alert(props: AlertProps, ref: React.Ref<HTMLDivElement>) {
  const { variant, ...properties } = props;
  const variants = { variant };
  const className = twMerge(alertVariants(variants), props.className);
  return <div className={className} ref={ref} role="alert" {...properties} />;
}

const alertVariants = cva("relative flex flex-col gap-1 w-full rounded-lg border px-4 py-3 text-sm", {
  variants: {
    variant: {
      default: "border-stone-700 text-stone-700",
      destructive: "border-red-700 text-red-700",
    },
  },
  defaultVariants: { variant: "default" },
});

Alert.displayName = "Alert";

type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export function AlertTitle(props: AlertTitleProps) {
  const { className, ...properties } = props;
  const classes = twMerge(alertTitleVariants(), className);
  return <h5 className={classes} {...properties} />;
}

const alertTitleVariants = cva("font-medium leading-none tracking-tight");

AlertTitle.displayName = "AlertTitle";

type AlertDescriptionProps = React.HTMLAttributes<HTMLDivElement>;

export function AlertDescription(props: AlertDescriptionProps) {
  const { className, ...properties } = props;
  const classes = twMerge(alertDescriptionVariants(), className);
  return <div className={classes} {...properties} />;
}

const alertDescriptionVariants = cva("text-sm [&_p]:leading-relaxed");

AlertDescription.displayName = "AlertDescription";
