import { Canvas } from "@react-three/fiber";
import React from "react";
import { ModelRender } from "../components/Canvas";
import { Text } from "../context/LanguageContext";

export const AboutMe = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col font-mono ml-24 mt-32 ">
        <div>
          <ol className="flex flex-row gap-12  list-decimal">
            <li className="text-green-subtitle-v1 text-4xl ">
              <h2 className="text-green-subtitle ">
                <Text tid="_aboutme" />
              </h2>
            </li>
          </ol>
        </div>
        <subtitle className="text-green-subtitle-v1 max-w-3xl mt-7">
          Hello! My name is Miguelangel and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided create a website for my dedicated Serve Mu online.
        </subtitle>
        <subtitle className="text-green-subtitle-v1 max-w-3xl mt-7">
          Agregar emigrante Fast-forward to today, and I’ve had the privilege of
          working at an advertising agency, a start-up, a huge corporation, and
          a student-led design studio. My main focus these days is building
          accessible, inclusive products and digital experiences at Upstatement
          for a variety of clients.
        </subtitle>
        <subtitle className="text-green-subtitle-v1 max-w-3xl mt-7">
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
        </subtitle>
        <subtitle className="text-green-subtitle-v1 max-w-3xl mt-7">
          Here are a few technologies I’ve been working with recently:
        </subtitle>
        JavaScript (ES6+) TypeScript React Eleventy Node.js WordPres
      </div>
      <div className="mt-28">
        <ModelRender />
      </div>
    </div>
  );
};
