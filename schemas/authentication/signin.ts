import { z } from "zod";

const SigninFormSchemaObject = {
  email: z.string().email("Email must be a valid mail."),
  password: z.string().min(8, "Password must be at least 8 characters."),
};

export const SigninFormSchema = z.object(SigninFormSchemaObject);
