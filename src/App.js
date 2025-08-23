import React, { Fragment, useEffect, useState, useContext } from "react";
import "./App.css";
import { AboutMe } from "./pages/aboutme";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";
import { Services } from "./pages/services";
import { Text, LanguageContext } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Experience } from "./pages/experience";
import { Footer } from "./components/Footer";
import { WhatsAppContact } from "./components/WhatsAppContact";
// import { useLocation, Routes, Route, Router } from "react-router-dom";
import { Home } from "./pages/home";

export const App = () => {
  const [page, setPage] = useState("aboutme");
  const { userLanguageChange } = useContext(LanguageContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-green-dark h-screen  ">
      <Header setPage={setPage} toggleMenu={[toggleMenu, setToggleMenu]} />

      <section
        id="home"
        className="flex bg-green-dark min-h-screen justify-center items-center delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0"
      >
        <Home />
      </section>
      <section
        id="aboutme"
        className="flex bg-green-dark min-h-screen justify-center items-center"
      >
        <AboutMe />
      </section>
      
      <section
        id="services"
        className="flex bg-green-dark min-h-screen justify-center items-center"
      >
        <Services />
      </section>

      <section 
        id="projects" 
        className="flex bg-green-dark min-h-screen justify-center items-center"
      >
        <Projects />
      </section>

      <section 
        id="contact" 
        className="flex bg-green-dark min-h-screen justify-center items-center"
      >
        <Contact />
      </section>
      
      <WhatsAppContact />
    </div>
  );
};
