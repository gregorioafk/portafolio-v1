import React from "react";
import { Text } from "../context/LanguageContext";

export const Home = () => (
  <div className="flex flex-col font-mono justify-center w-full max-w-4xl px-4 py-8 pt-16 md:pt-8">
    <div className="text-gray-600 text-sm mb-2">
      <Text tid="_greeting" />
    </div>
    <h1 className="text-black text-2xl md:text-3xl font-bold mb-2">
      <Text tid="_name" />
    </h1>
    <h2 className="text-gray-600 text-xl md:text-2xl mb-6">
      <Text tid="_headline" />
    </h2>

    <p className="text-gray-600 max-w-full lg:max-w-2xl text-sm leading-relaxed mb-8">
      <Text tid="_about" />
    </p>
    <button className="w-auto px-4 py-2 text-black border border-gray-300 rounded hover:bg-gray-100 text-sm">
      <Text tid="_resumen" />
    </button>
  </div>
);
