import React, { useState } from "react";
import "./App.css";
import { AboutMe } from "./pages/aboutme";
import { Blog } from "./pages/blog";
import { Projects } from "./pages/projects";

export const App = () => {
  const [page, setPage] = useState("aboutme");
  return (
    <div className="bg-slate-700 text-white h-screen">
      <header className="">
        <ul className="flex flex-row gap-5 align-middle justify-center cursor-pointer">
          <li onClick={() => setPage("aboutme")}>About Me</li>
          <li onClick={() => setPage("blog")}>Blog</li>
          <li onClick={() => setPage("projects")}>Projects</li>
        </ul>
      </header>
      {page === "aboutme" && <AboutMe />}
      {page === "blog" && <Blog />}
      {page === "projects" && <Projects />}
    </div>
  );
};
