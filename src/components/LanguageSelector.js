import React, { useContext } from "react";
import { languageOptions } from "../languages";
import { LanguageContext } from "../context/LanguageContext";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (language) => {
    userLanguageChange(language);
  };

  return (
    <div className="flex items-center space-x-2">
      {Object.entries(languageOptions).map(([id, name]) => (
        <button
          key={id}
          onClick={() => handleLanguageChange(id)}
          className={`px-3 py-1 text-sm rounded border transition-colors duration-300 ${
            userLanguage === id
              ? "bg-green-subtitle text-green-dark border-green-subtitle"
              : "text-green-subtitle-v1 border-green-subtitle-v1 hover:text-green-subtitle hover:border-green-subtitle"
          }`}
        >
          {id.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
