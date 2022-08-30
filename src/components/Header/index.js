import React, { useState } from "react";
import { Text } from "../../context/LanguageContext";

export const Header = ({ setPage, toggleMenu: [toggle, show] }) => {
  return (
    <header className="font-mono ">
      <div className="flex md:hidden end justify-end">
        {!toggle && (
          <button
            onClick={() => show(!toggle)}
            className="flex items-center m-5 text-green-subtitle-v1 px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-5 w-5 text-green-subtitle-v1"
              viewBox="0 0 20 20"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        )}
        {toggle && (
          <aside className="bg-green-dark h-screen flex w-3/5 z-10 absolute flex-col items-center justify-center  ease-out duration-100 ">
            <button
              onClick={() => show(!toggle)}
              className="text-orange absolute top-0 right-0"
            >
              soy una x
            </button>
            <nav className="text-green-subtitle-v1 ">
              <ol className="gap-12 cursor-pointer list-decimal">
                <li className="mt-10">
                  <Text tid="_about" />
                </li>
                <li className="mt-10">
                  <Text tid="_experience" />
                </li>
                <li className="mt-10">
                  <Text tid="_work" />
                </li>
                <li className="mt-10">
                  <Text tid="_contact" />
                </li>
              </ol>
            </nav>
          </aside>
        )}
      </div>

      <div className=" mr-10 items-center h-20 sm:hidden md:flex  ">
        <div className="text-yellow">logo</div>
        <div className="ml-auto">
          <ol className="flex flex-row gap-12 cursor-pointer list-decimal">
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("aboutme")}
            >
              <a
                href="/"
                className="text-green-subtitle hover:text-green-subtitle-v1 duration-300"
              >
                <Text tid="_about" />
              </a>
            </li>
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("blog")}
            >
              <a
                href="/"
                className="text-green-subtitle hover:text-green-subtitle-v1 duration-300"
              >
                <Text tid="_experience" />
              </a>
            </li>
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("projects")}
            >
              <a
                href="/"
                className="text-green-subtitle hover:text-green-subtitle-v1 duration-300"
              >
                <Text tid="_work" />
              </a>
            </li>
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("projects")}
            >
              <a
                href="/"
                className="text-green-subtitle hover:text-green-subtitle-v1 duration-300"
              >
                <Text tid="_contact" />
              </a>
            </li>
          </ol>
        </div>
      </div>
    </header>
  );
};
