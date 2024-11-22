/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useController, type UseControllerProps } from "react-hook-form";

import { Error } from "./error";

type FunctionComponent = React.FC<any>;

export type FieldProps<F extends FunctionComponent> = {
  /**
   * The properties given to the component by this field shouldn't be required.
   */
  as: Omit<F, "error">;
} & React.ComponentProps<F> &
  UseControllerProps<any>;

/**
 * This component not only connects the field to the form, but also adds an error message.
 */
export function Field<F extends FunctionComponent>(props: FieldProps<F>) {
  const { as: Component, control, name, ...properties } = props;
  const useControllerParameters = { control, name };
  const {
    field,
    fieldState: { error },
  } = useController(useControllerParameters);
  return (
    <>
      <Component
        aria-invalid={!!error}
        aria-describedby={!!error ? name + "-error" : undefined}
        {...field}
        {...properties}
      />
      {error ? <MemoError id={name + "-error"}>{error.message}</MemoError> : null}
    </>
  );
}

const MemoError = React.memo(Error);

Field.displayName = "Field";
