import React from "react";
import { useNavigate } from "react-router-dom";

export const DetailsPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      DetailsPage
      <button onClick={handleBack}>Back</button>
    </div>
  );
};
