import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    username: z
      .string()
      .min(1, "Username is required")
      .max(20, "Username cannot exceed 20 characters")
      .regex(/^\S+$/, "Username cannot contain spaces"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/^\S+$/, "Password cannot contain spaces"),
    confirmPassword: z.string().min(1, "Confirmed password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
