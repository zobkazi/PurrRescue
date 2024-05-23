import { z } from "zod";

enum PetGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum PetCategory {
  DOG = "DOG",
  CAT = "CAT",
  BIRD = "BIRD",
}

export enum PetSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  EX_LARGE = "EX_LARGE",
}

export enum PetColor {
  WHITE = "WHITE",
  BLACK = "BLACK",
  BROWN = "BROWN",
  GRAY = "GRAY",
}

export enum PetBreed {
  HUSKY = "HUSKY",
  BEAGLE = "BEAGLE",
  DOGOT = "DOGOT",
  LABRADO = "LABRADO",
  POMERANIAN = "POMERANIAN",
}

export const PetAdoptionSchema = z.object({
  description: z.string().optional(),
  status: z.string().optional(),
  size: z.nativeEnum(PetSize),
  gender: z.nativeEnum(PetGender),
  color: z.nativeEnum(PetColor),
  age: z.number().min(0),
  breed: z.nativeEnum(PetBreed),
  category: z.nativeEnum(PetCategory),
});
