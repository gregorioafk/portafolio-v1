import React, { useState } from "react";
import { Text } from "../../context/LanguageContext";
import LanguageSelector from "../LanguageSelector";

export const Header = ({ setPage, toggleMenu: [toggle, show] }) => {
  return (
    <header className="font-mono">
      {/* Mobile Header */}
      <div className="md:hidden bg-green-dark w-full h-12 fixed top-0 z-50 flex justify-between items-center px-4">
        <div className="text-green-subtitle font-bold">
          <Text tid="_name" />
        </div>
        <button
          onClick={() => show(!toggle)}
          className="text-green-subtitle-v1 hover:text-green-subtitle transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {toggle ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {toggle && (
        <div className="md:hidden fixed inset-0 z-40 bg-green-dark bg-opacity-95">
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="text-green-subtitle-v1">
              <ol className="list-decimal space-y-8 text-center">
                <li onClick={() => { setPage("home"); show(false); }}>
                  <a href="#home" className="text-green-subtitle hover:text-green-subtitle-v1 duration-300 text-xl">
                    <Text tid="_home" />
                  </a>
                </li>
                <li onClick={() => { setPage("aboutme"); show(false); }}>
                  <a href="#aboutme" className="text-green-subtitle hover:text-green-subtitle-v1 duration-300 text-xl">
                    <Text tid="_aboutme" />
                  </a>
                </li>
                <li onClick={() => { setPage("services"); show(false); }}>
                  <a href="#services" className="text-green-subtitle hover:text-green-subtitle-v1 duration-300 text-xl">
                    <Text tid="_services" />
                  </a>
                </li>
                <li onClick={() => { setPage("projects"); show(false); }}>
                  <a href="#projects" className="text-green-subtitle hover:text-green-subtitle-v1 duration-300 text-xl">
                    <Text tid="_projects" />
                  </a>
                </li>
                <li onClick={() => { setPage("contact"); show(false); }}>
                  <a href="#contact" className="text-green-subtitle hover:text-green-subtitle-v1 duration-300 text-xl">
                    <Text tid="_contact" />
                  </a>
                </li>
              </ol>
              <div className="mt-8 flex justify-center">
                <LanguageSelector />
              </div>
            </nav>
          </div>
        </div>
      )}

      <div className="bg-green-dark w-full items-center h-12 fixed sm:hidden md:flex justify-between px-8">
        <div className="flex">
          <ol className="flex flex-row gap-12 cursor-pointer list-spacecouter">
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("home")}
            >
              <a
                href="#home"
                className="text-green-subtitle hover:text-green-subtitle-v1 duration-300"
              >
                <Text tid="_home" />
              </a>
            </li>
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("aboutme")}
            >
              <a
                href="#aboutme"
                className="text-green-subtitle hover:text-green-subtitle-v1 duration-300"
              >
                <Text tid="_aboutme" />
              </a>
            </li>
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("services")}
            >
              <a
                href="#services"
                className="text-green-subtitle hover:text-green-subtitle-v1 duration-300"
              >
                <Text tid="_services" />
              </a>
            </li>
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("projects")}
            >
              <a
                href="#projects"
                className="text-green-subtitle hover:text-green-subtitle-v1 duration-300"
              >
                <Text tid="_projects" />
              </a>
            </li>
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("contact")}
            >
              <a
                href="#contact"
                className="text-green-subtitle hover:text-green-subtitle-v1 duration-300"
              >
                <Text tid="_contact" />
              </a>
            </li>
          </ol>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};
