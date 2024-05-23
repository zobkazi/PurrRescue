import { z } from "zod";
export const UserSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().nonempty(),
});
