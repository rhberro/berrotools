"use server";

import { redirect } from "next/navigation";

import { SignupFormState, SignupFormValues } from "@/interfaces/authentication/signup";
import { SignupFormSchema } from "@/schemas/authentication/signup";
import { createClientForServer } from "@/utilities/server";

export async function signup(state: SignupFormState, form: FormData): Promise<SignupFormState | undefined> {
  const data: SignupFormValues = {
    email: form.get("email") as string,
    password: form.get("password") as string,
  };
  const validation = SignupFormSchema.safeParse(data);
  if (validation.error && validation.error.errors) {
    return {
      message: "Failed to create your account due to invalid form data.",
    };
  }
  const client = await createClientForServer();
  const response = await client.auth.signUp(data);
  if (response.error) {
    return { message: "Failed to create your account, try again later." };
  }
  redirect("/dashboard");
}
