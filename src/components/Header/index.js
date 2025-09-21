import React, { useState } from "react";
import { Text } from "../../context/LanguageContext";
import LanguageSelector from "../LanguageSelector";

export const Header = ({ setPage, toggleMenu: [toggle, show] }) => {
  return (
    <header className="font-mono">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 w-full h-12 fixed top-0 z-50 flex justify-between items-center px-4">
        <div className="text-black font-medium text-sm">
          <Text tid="_name" />
        </div>
        <button
          onClick={() => show(!toggle)}
          className="text-gray-600 hover:text-black"
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
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="text-black">
              <ol className="space-y-6 text-center">
                <li onClick={() => { setPage("home"); show(false); }}>
                  <a href="#home" className="text-gray-600 hover:text-black text-base">
                    <Text tid="_home" />
                  </a>
                </li>
                <li onClick={() => { setPage("aboutme"); show(false); }}>
                  <a href="#aboutme" className="text-gray-600 hover:text-black text-base">
                    <Text tid="_aboutme" />
                  </a>
                </li>
                <li onClick={() => { setPage("services"); show(false); }}>
                  <a href="#services" className="text-gray-600 hover:text-black text-base">
                    <Text tid="_services" />
                  </a>
                </li>
                <li onClick={() => { setPage("projects"); show(false); }}>
                  <a href="#projects" className="text-gray-600 hover:text-black text-base">
                    <Text tid="_projects" />
                  </a>
                </li>
                <li onClick={() => { setPage("contact"); show(false); }}>
                  <a href="#contact" className="text-gray-600 hover:text-black text-base">
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

      <div className="bg-white border-b border-gray-200 w-full items-center h-12 fixed sm:hidden md:flex justify-between px-8">
        <div className="flex">
          <ol className="flex flex-row gap-8 cursor-pointer">
            <li onClick={() => setPage("home")}>
              <a href="#home" className="text-gray-600 hover:text-black text-sm">
                <Text tid="_home" />
              </a>
            </li>
            <li onClick={() => setPage("aboutme")}>
              <a href="#aboutme" className="text-gray-600 hover:text-black text-sm">
                <Text tid="_aboutme" />
              </a>
            </li>
            <li onClick={() => setPage("services")}>
              <a href="#services" className="text-gray-600 hover:text-black text-sm">
                <Text tid="_services" />
              </a>
            </li>
            <li onClick={() => setPage("projects")}>
              <a href="#projects" className="text-gray-600 hover:text-black text-sm">
                <Text tid="_projects" />
              </a>
            </li>
            <li onClick={() => setPage("contact")}>
              <a href="#contact" className="text-gray-600 hover:text-black text-sm">
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
