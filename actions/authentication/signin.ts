"use server";

import { redirect } from "next/navigation";

import { SigninFormState, SigninFormValues } from "@/interfaces/authentication/signin";
import { SigninFormSchema } from "@/schemas/authentication/signin";
import { createClientForServer } from "@/utilities/server";

export async function signin(state: SigninFormState, form: FormData): Promise<SigninFormState | undefined> {
  const data: SigninFormValues = {
    email: form.get('email') as string,
    password: form.get('password') as string
  };
  const validation = await SigninFormSchema.safeParse(data);
  if (validation.error && validation.error.errors) {
    return { message: 'Wrong data.' };
  }
  const client = await createClientForServer();
  const response = await client.auth.signInWithPassword(data);
  if (response.error) {
    return { message: 'Invalid login credentials.' };
  }
  redirect("/dashboard");
}
