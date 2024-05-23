"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { PetAdoptionSchema } from "@/schemas/PetAdoptionSchema";

const usePetAdoptionClient = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PetAdoptionSchema),
  });

  const onSubmit = async (data: z.infer<typeof PetAdoptionSchema>) => {
    try {
      const response = await axios.post("/api/pet-adoption", data); // Replace with your actual endpoint
      if (response.status === 200) {
        setSuccessMessage("Pet adopted successfully!");
        setErrorMessage(null);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage(null);
    }
  };

  return {
    successMessage,
    errorMessage,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default usePetAdoptionClient;
