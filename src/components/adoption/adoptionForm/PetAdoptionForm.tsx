"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PetAdoptionSchema,
  PetSize,
  PetColor,
  PetBreed,
  PetCategory,
} from "@/schemas/PetAdoptionSchema"; // Adjust the import according to your schema file path
import { z } from "zod";

type PetAdoptionFormValues = z.infer<typeof PetAdoptionSchema>;

const PetAdoptionForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PetAdoptionFormValues>({
    resolver: zodResolver(PetAdoptionSchema),
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: PetAdoptionFormValues) => {
    try {
      const response = await fetch("/api/pet-adoption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage("Pet adoption form submitted successfully!");
        setErrorMessage(null);
      } else {
        setErrorMessage("Failed to submit the form. Please try again.");
        setSuccessMessage(null);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
      <h1 className="text-2xl font-bold mb-4">Pet Adoption Form</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-xs italic">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="status"
          >
            Status
          </label>
          <input
            id="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("status")}
          />
          {errors.status && (
            <p className="text-red-500 text-xs italic">
              {errors.status.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="size"
          >
            Size
          </label>
          <select
            id="size"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("size")}
          >
            {Object.values(PetSize).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.size && (
            <p className="text-red-500 text-xs italic">{errors.size.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="color"
          >
            Color
          </label>
          <select
            id="color"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("color")}
          >
            {Object.values(PetColor).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
          {errors.color && (
            <p className="text-red-500 text-xs italic">
              {errors.color.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            id="age"
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("age")}
          />
          {errors.age && (
            <p className="text-red-500 text-xs italic">{errors.age.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="breed"
          >
            Breed
          </label>
          <select
            id="breed"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("breed")}
          >
            {Object.values(PetBreed).map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          {errors.breed && (
            <p className="text-red-500 text-xs italic">
              {errors.breed.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("category")}
          >
            {Object.values(PetCategory).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs italic">
              {errors.category.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>

        {successMessage && (
          <p className="text-green-500 text-xs italic mt-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-xs italic mt-4">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default PetAdoptionForm;
