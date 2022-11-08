import React, { useState } from "react";
import { Text } from "../../context/LanguageContext";

export const Header = ({ setPage, toggleMenu: [toggle, show] }) => {
  return (
    <header className="font-mono ">
      <div className="flex md:hidden end justify-end ">
        <aside className="h-screen flex z-10 flex-col items-center justify-center  ease-out duration-100 fixed ">
          <nav className="text-green-subtitle-v1 ">
            <ol className="list-decimal">
              <li className="mt-10">{/* <Text tid="_about" /> */}</li>
              <li className="mt-10">{/* <Text tid="_experience" /> */}</li>
              <li className="mt-10">{/* <Text tid="_work" /> */}</li>
              <li className="mt-10">{/* <Text tid="_contact" /> */}</li>
            </ol>
          </nav>
        </aside>
      </div>

      <div className="bg-green-dark  w-full items-center h-12 fixed sm:hidden md:flex  ">
        <div className="m-auto">
          <ol className="flex flex-row gap-12 cursor-pointer list-decimal">
            <li
              className="text-green-subtitle-v1"
              onClick={() => setPage("aboutme")}
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
              onClick={() => setPage("blog")}
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
