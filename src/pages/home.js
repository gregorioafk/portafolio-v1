import React from "react";
import { Text } from "../context/LanguageContext";

export const Home = () => (
  <div className="flex flex-col font-mono justify-center ">
    <subtitle className="text-green-subtitle-v1 lg:text-2xl  ">
      <Text tid="_greeting" />
    </subtitle>
    <subtitle className="text-green-subtitle lg:text-7xl sm:text-sm">
      <Text tid="_name" />
    </subtitle>
    <subtitle className="text-green-subtitle-v1 lg:text-7xl mt-4 sm:text-sm">
      <Text tid="_headline" />
    </subtitle>

    <subtitle className="text-green-subtitle-v1 lg:max-w-3xl mt-7 sm:text-sm">
      <Text tid="_about" />
    </subtitle>
    <button className="mt-12 w-3/12 text-green-subtitle-v1 outline outline-green-subtitle-v1 outline-2 outline-offset-4 sm:ml-16">
      <Text tid="_resumen" />
    </button>
  </div>
);
