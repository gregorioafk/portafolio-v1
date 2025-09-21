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
    <div className="bg-white mx-10">
      <div className="">
        <Home />
      </div>
      <div className="">
        <AboutMe />
      </div>
      <div className="">
        <Services />
      </div>
      <div className="">
        <Projects />
      </div>
      <div className="">
        <Contact />
      </div>

      <WhatsAppContact />
    </div>
  );
};
