import { z } from "zod";

import { SignupFormSchema } from "@/schemas/authentication/signup";

export type SignupFormValues = z.infer<typeof SignupFormSchema>;

export type SignupFormState =
  | {
      message: string;
    }
  | undefined;
