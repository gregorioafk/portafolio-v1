import { Canvas } from "@react-three/fiber";
import React from "react";
import { ModelRender } from "../components/Canvas";
import { Text } from "../context/LanguageContext";

const tecnologies = [
  "React",
  "React Native",
  "Typescript",
  "Angular",
  "Node.js",
  "C# (.NET)",
  "Java",
  "SQL",
];

export const AboutMe = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col ">
      <div className="flex flex-col font-mono lg:ml-32 ">
        <div>
          <ol className="flex flex-row lg:gap-12 lg:ml-14 list-decimal  sm:ml-7 sm:after:h-0.5 sm:after:w-2/4 sm:after:ml-10 after:bg-green-subtitle-v1 lg:after:w-2/4  lg:after:h-0.5 items-center">
            <li className="text-green-subtitle-v1 lg:text-4xl ">
              <h2 className="text-green-subtitle ">
                <Text tid="_aboutme" />
              </h2>
            </li>
          </ol>
        </div>
        <subtitle className="text-green-subtitle-v1 lg:max-w-3xl lg:mt-7">
          <Text tid="_descriptionaboutme" />
        </subtitle>
        <subtitle className="text-green-subtitle-v1 lg:max-w-3xl mt-7">
          <Text tid="_tecnologies" />
        </subtitle>
        <ul className="list-disc text-green-subtitle marker:content-['▹'] grid grid-cols-2 mt-4 ml-6">
          {tecnologies.map((t) => (
            <li>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:w-56 sm:h-56 lg:w-80 lg:h-80 self-center">
        {/* <ModelRender  w={}/> */}
      </div>
    </div>
  );
};
