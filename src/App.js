import React, { useState, useContext } from "react";
import "./App.css";
import { AboutMe } from "./pages/aboutme";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";
import { Text, LanguageContext } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Experience } from "./pages/experience";
import { Footer } from "./components/Footer";

export const App = () => {
  const [page, setPage] = useState("aboutme");
  const { userLanguageChange } = useContext(LanguageContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-green-dark h-screen ">
      <Header setPage={setPage} toggleMenu={[toggleMenu, setToggleMenu]} />
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
            I'm a software developer specializing in building exceptional
            digital experiences. Currently, I'm focused on building
            --------------------------------------------
          </subtitle>
          <button className="mt-12 w-3/12 text-green-subtitle-v1 outline outline-green-subtitle-v1 outline-2 outline-offset-4 sm:ml-16">
            Resumen
          </button>
        </div>
      </section>
      <section className="flex bg-green-dark h-screen justify-center px-6">
        <AboutMe />
      </section>
      <section id="experience" className="flex bg-green-dark h-full ">
        <Experience />
      </section>

      {/* <section id="projects" className="flex bg-green-dark h-full ">
        <Projects />
      </section> */}

      <section id="contact" className="flex bg-green-dark h-full ">
        <Contact />
      </section>
      {/* <Footer /> */}
    </div>
  );
};
