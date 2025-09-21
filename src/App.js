import React from "react";
import "./App.css";
import { AboutMe } from "./pages/aboutme";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";
import { Services } from "./pages/services";
import { WhatsAppContact } from "./components/WhatsAppContact";
import { Home } from "./pages/home";

export const App = () => {

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
