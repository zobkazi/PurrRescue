import { z } from "zod";

export const PetAdoptionSchema = z.object({
  description: z.string().optional(),
  status: z.string().optional(),
  size: z.string().optional(),
  gender: z.string().optional(),
  color: z.string().optional(),
  age: z.string().optional(),
  breed: z.string().optional(),
  category: z.string().optional(),
});

export type PetAdoptionSchema = z.infer<typeof PetAdoptionSchema>;
