"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm, type UseFormProps, useFormState, type UseFormStateProps } from "react-hook-form";

import { signin } from "@/actions/authentication/signin";
import { Button } from "@/components/button";
import { Field } from "@/components/field";
import { FieldSet } from "@/components/fieldset";
import { Input } from "@/components/input";
import { SigninFormValues } from "@/interfaces/authentication/signin";
import { SigninFormSchema } from "@/schemas/authentication/signin";
import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { Label } from "@/components/label";
import { Checkbox } from "@/components/checkbox";

type SigninFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function SigninForm(props: React.PropsWithChildren<SigninFormProps>) {
  const [state, action, pending] = React.useActionState(signin, undefined);
  const form = useForm<SigninFormValues>(useFormParameters);
  return (
    <form action={action} className="flex flex-col gap-4" {...props}>
      <FieldSet disabled={pending}>
        <Label>
          Email
          <MemoField as={Input} control={form.control} name="email" type="email" placeholder="your@email.co" required />
        </Label>
        <Label>
          Password
          <MemoField as={Input} control={form.control} name="password" type="password" placeholder="•••••••" required />
        </Label>
        <Label inline>
          <MemoField as={Checkbox} control={form.control} name="remember" />
          Remember me
        </Label>
      </FieldSet>
      <FormFooter control={form.control} pending={pending} />
      {state && state.message ? (
        <Alert variant="destructive">
          <AlertTitle>Failed to authenticate!</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      ) : null}
    </form>
  );
}

const MemoField = React.memo(Field);

const useFormParameters: UseFormProps<SigninFormValues> = {
  defaultValues: { email: "", password: "", remember: false },
  resolver: zodResolver(SigninFormSchema),
  mode: "all",
};

type FormFooterProps = UseFormStateProps<SigninFormValues> & { pending: boolean };

function FormFooter(props: FormFooterProps) {
  const { pending, ...properties } = props;
  const { isValid } = useFormState(properties);
  return (
    <Button type="submit" disabled={isValid === false || pending} size="large">
      Sign In
    </Button>
  );
}
