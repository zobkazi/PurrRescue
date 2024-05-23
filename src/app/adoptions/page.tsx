import PetAdoptionForm from "@/components/adoption/adoptionForm/PetAdoptionForm";
import AddedRep from "@/components/reporting/added/AddedRep";
import React from "react";

const PetAdoptionPages = () => {
  return (
    <div>
          <AddedRep />
          <PetAdoptionForm />
    </div>
  );
};

export default PetAdoptionPages;
