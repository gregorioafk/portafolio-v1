import React from "react";
import { Text } from "../../context/LanguageContext";

export const Header = ({ setPage }) => {
  return (
    <header className="font-mono ">
      <div className="flex mr-10 items-center h-20">
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
