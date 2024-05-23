"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { PetAdoptionSchema } from "@/schemas/PetAdoptionSchema";

const PetAdoptionForm = () => {
  type UserSchema = z.infer<typeof PetAdoptionSchema>;

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(PetAdoptionSchema),
  });

  const onSubmit = async (data: UserSchema) => {
    try {
      const response = await axios.post("", data); // Replace "/api/user/register" with your actual endpoint
      console.log(response.data);
      if (response.status === 200) {
        setSuccessMessage("User created successfully!");
        setErrorMessage(null);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Age
          </label>
          <input
            type="text"
            id="name"
            {...register("age")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.age && (
            <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            {...register("description")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="Status"
            className="block text-gray-700 font-bold mb-2"
          >
            Status
          </label>
          <input
            type="text"
            id="status"
            {...register("status")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.status && (
            <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PetAdoptionForm;
