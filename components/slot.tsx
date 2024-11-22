import * as React from "react";

export type SlotProps = React.HTMLAttributes<HTMLElement> & Partial<{ children: React.ReactNode; slotted: boolean }>;

export function Slot(props: Partial<SlotProps>) {
  const { children, ...properties } = props;
  return React.isValidElement(children) ? React.cloneElement(children, properties) : null;
}
