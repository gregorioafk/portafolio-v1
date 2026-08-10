import React from "react";
import "./App.css";
import { WhatsAppContact } from "./components/WhatsAppContact";
import { Home } from "./pages/home";

export const App = () => {

  return (
    <div className="bg-gray-900 min-h-screen mx-10">
      <div className="">
        <Home />
      </div>

      <WhatsAppContact />
    </div>
  );
};
