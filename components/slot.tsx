import * as React from "react";

export type SlotProperty = Partial<{ slotted: boolean }>;

export type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export function Slot(props: Partial<SlotProps>) {
  const { children, ...properties } = props;
  return React.isValidElement(children) ? React.cloneElement(children, properties) : null;
}
