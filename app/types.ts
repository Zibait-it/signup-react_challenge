import { z } from "zod";
import { signUpSchema } from "./validationSchemas";

export type FormData = z.infer<typeof signUpSchema>;
