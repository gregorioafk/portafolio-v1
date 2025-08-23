import React from "react";
import { Text } from "../context/LanguageContext";

export const Home = () => (
  <div className="flex flex-col font-mono justify-center w-full max-w-6xl mx-auto px-4 py-8 pt-16 md:pt-8">
    <div className="text-green-subtitle-v1 text-lg md:text-2xl mb-4">
      <Text tid="_greeting" />
    </div>
    <h1 className="text-green-subtitle text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
      <Text tid="_name" />
    </h1>
    <h2 className="text-green-subtitle-v1 text-3xl md:text-5xl lg:text-7xl mb-8">
      <Text tid="_headline" />
    </h2>

    <p className="text-green-subtitle-v1 max-w-full lg:max-w-3xl text-base md:text-lg leading-relaxed mb-12">
      <Text tid="_about" />
    </p>
    <button className="w-full sm:w-auto max-w-xs px-8 py-3 text-green-subtitle-v1 border border-green-subtitle-v1 rounded hover:bg-green-subtitle hover:text-green-dark transition-colors duration-300 text-center">
      <Text tid="_resumen" />
    </button>
  </div>
);
