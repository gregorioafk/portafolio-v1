import React, { useState, useContext } from "react";
import "./App.css";
import { AboutMe } from "./pages/aboutme";
import { Blog } from "./pages/blog";
import { Projects } from "./pages/projects";
import { Text, LanguageContext } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Experience } from "./pages/experience";

export const App = () => {
  const [page, setPage] = useState("aboutme");
  const { userLanguageChange } = useContext(LanguageContext);

  return (
    <div className=" bg-green-dark h-screen ">
      <Header setPage={setPage} />

      <section className="flex bg-green-dark h-full justify-center">
        <div className="flex flex-col font-mono ml-24 mt-32 mr-56">
          <subtitle className="text-green-subtitle-v1 text-2xl mb-6">
            Hi there, my name is
          </subtitle>
          <subtitle className="text-green-subtitle text-7xl">
            Miguelangel Rojas
          </subtitle>

          <subtitle className="text-green-subtitle-v1 text-7xl mt-4">
            Front-end developer
          </subtitle>
          <subtitle className="text-green-subtitle-v1 max-w-3xl mt-7">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products at Upstatement.
          </subtitle>
        </div>
      </section>
      <section className="flex bg-green-dark h-full justify-center">
        <AboutMe />
      </section>
      <section id="experience" className="flex bg-green-dark  h-full">
        <Experience />
      </section>
      <Blog />
      <Projects />
    </div>
  );
};
