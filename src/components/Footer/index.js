import React from "react";
import espania from "../../assets/spain1.svg";
import austria from "../../assets/australia.svg";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 m-6 cursor-pointer ">
      <img
        className="h-9 w-9 border-green-subtitle-v1 border-solid border rounded-3xl ring-offset-2"
        src={espania}
        alt="spain"
      />
    </div>
  );
};
