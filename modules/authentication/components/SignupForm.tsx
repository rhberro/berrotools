"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm, type UseFormProps, useFormState, type UseFormStateProps } from "react-hook-form";

import { signup } from "@/actions/authentication/signup";
import { Button } from "@/components/button";
import { Field } from "@/components/field";
import { FieldSet } from "@/components/fieldset";
import { Input } from "@/components/input";
import { SignupFormValues } from "@/interfaces/authentication/signup";
import { SignupFormSchema } from "@/schemas/authentication/signup";
import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { Label } from "@/components/label";

type SignupFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function SignupForm(props: React.PropsWithChildren<SignupFormProps>) {
  const [state, action, pending] = React.useActionState(signup, undefined);
  const form = useForm<SignupFormValues>(useFormParameters);
  return (
    <form action={action} className="flex flex-col gap-4" {...props}>
      <FieldSet disabled={pending}>
        <Label>
          Email
          <MemoField as={Input} autoComplete="email" control={form.control} name="email" placeholder="your@email.co" type="email" required />
        </Label>
        <Label>
          Password
          <MemoField as={Input} autoComplete="current-password" control={form.control} name="password" placeholder="•••" type="password" required />
        </Label>
      </FieldSet>
      <FormFooter control={form.control} pending={pending} />
      {state && state.message ? (
        <Alert variant="error">
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      ) : null}
    </form>
  );
}

const MemoField = React.memo(Field);

const useFormParameters: UseFormProps<SignupFormValues> = {
  defaultValues: { email: "", password: "" },
  resolver: zodResolver(SignupFormSchema),
  mode: "all",
};

type FormFooterProps = UseFormStateProps<SignupFormValues> & { pending: boolean };

function FormFooter(props: FormFooterProps) {
  const { pending, control } = props;
  const useFormStateParameters = { control };
  const { isValid } = useFormState(useFormStateParameters);
  return (
    <Button type="submit" disabled={isValid === false || pending} size="large">
      Sign Up
    </Button>
  );
}
