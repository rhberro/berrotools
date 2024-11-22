import { z } from "zod";

const SignupFormSchemaObject = {
  email: z.string().email("Email must be a valid mail."),
  password: z.string().min(8, "Password must be at least 8 characters."),
};

export const SignupFormSchema = z.object(SignupFormSchemaObject);
