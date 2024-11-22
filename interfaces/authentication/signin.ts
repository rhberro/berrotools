import { z } from "zod";

import { SigninFormSchema } from "@/schemas/authentication/signin";

export type SigninFormValues = z.infer<typeof SigninFormSchema>;

export type SigninFormState =
  | {
      message: string;
    }
  | undefined;
