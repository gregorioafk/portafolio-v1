import React, { Fragment, useEffect, useState, useContext } from "react";
import "./App.css";
import { AboutMe } from "./pages/aboutme";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";
import { Text, LanguageContext } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Experience } from "./pages/experience";
import { Footer } from "./components/Footer";
// import { useLocation, Routes, Route, Router } from "react-router-dom";
import { Router } from "@reach/router";
import { Home } from "./pages/home";

export const App = () => {
  const [page, setPage] = useState("aboutme");
  const { userLanguageChange } = useContext(LanguageContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-green-dark h-screen ">
      <Header setPage={setPage} toggleMenu={[toggleMenu, setToggleMenu]} />

      <section
        id="home"
        className="flex bg-green-dark h-screen justify-center px-6"
      >
        <Home />
      </section>
      <section
        id="aboutme"
        className="flex bg-green-dark h-screen justify-center px-6"
      >
        <AboutMe />
      </section>
      {/* <section id="experience" className="flex bg-green-dark h-full ">
        <Experience />
      </section> */}

      {/* <section id="projects" className="flex bg-green-dark h-full ">
        <Projects />
      </section> */}

      {/* <section id="contact" className="flex bg-green-dark h-full ">
        <Contact />
      </section> */}
      {/* <Footer /> */}
    </div>
  );
};
