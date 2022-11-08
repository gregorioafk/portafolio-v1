import React from "react";

export const Home = () => (
  <section className="flex bg-green-dark h-screen justify-center px-6 ">
    <div className="flex flex-col font-mono lg:ml-24 lg:mt-32 sm:ml-0 sm:mt-5">
      <subtitle className="text-green-subtitle-v1 lg:text-2xl mb-6 ">
        Hi there, my name is
      </subtitle>
      <subtitle className="text-green-subtitle lg:text-7xl sm:text-sm">
        Miguelangel Rojas
      </subtitle>

      <subtitle className="text-green-subtitle-v1 lg:text-7xl mt-4 sm:text-sm">
        Front-end developer
      </subtitle>
      <subtitle className="text-green-subtitle-v1 lg:max-w-3xl lg:mt-7 sm:text-sm">
        I'm a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products at Upstatement.
      </subtitle>
      <button className="mt-12 w-3/12 text-green-subtitle-v1 outline outline-green-subtitle-v1 outline-2 outline-offset-4 sm:ml-16">
        Resumen
      </button>
    </div>
  </section>
);
