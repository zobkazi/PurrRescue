import { z } from "zod";

// Define the enums
export enum PetBreed {
  LABRADOR = "LABRADOR",
  GOLDEN_RETRIEVER = "GOLDEN_RETRIEVER",
  GERMAN_SHEPHERD = "GERMAN_SHEPHERD",
  // Add other breeds as needed
}

export enum PetColor {
  BLACK = "BLACK",
  WHITE = "WHITE",
  BROWN = "BROWN",
  // Add other colors as needed
}

export enum PetSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  // Add other sizes as needed
}

export enum PetCategory {
  DOG = "DOG",
  CAT = "CAT",
  BIRD = "BIRD",
  // Add other categories as needed
}

export enum PetGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  // Add other genders as needed
}

// Define the CreatePetSchema using Zod
export const CreatePetSchema = z.object({
  userId: z.string(),
  name: z.string(),
  breed: z.nativeEnum(PetBreed),
  age: z.string().default("0").optional(),
  color: z.nativeEnum(PetColor),
  size: z.nativeEnum(PetSize),
  description: z.string().min(20).max(500),
  image: z.string().optional(),
  category: z.nativeEnum(PetCategory),
  gender: z.nativeEnum(PetGender),
});
