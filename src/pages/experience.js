import React, { useState } from "react";
import { Text } from "../context/LanguageContext";

const works = [
  {
    job: "SatoshiTango",
    title: "Front-end developer",
    description: [
      "Improve and fix UI",
      "Integrate accessibility in the platform",
      "Create modules and custom components",
    ],
    datetime: "May 2020 - Present",
    link: "https://www.satoshitango.com/",
  },
  {
    job: "Legal Surf",
    title: "Front & Back developer",
    description: [
      "Build MVP with my co-worker",
      "Create reusable components with great performance",
      "Create queries and mutations in GraphQL",
      "Integrate API to the app",
    ],
    datetime: "May 2020 - Present",
    link: "https://legal.surf/",
  },
  {
    job: "Osprera",
    title: "Backend Developer",
    description: [
      "Understand internal product",
      "Build and maintenance ABM",
      "Build API REST to be consumed to multiple services",
      "Consumed government's API",
    ],
    datetime: "May 2020 - Present",

    link: "https://www.osprera.org.ar/",
  },
  {
    job: "NEPS",
    title: "Backend developer",
    description: [
      "Build system flowchart",
      "Create schemas, layout and ABM12",
      "Create electronic bills with government's API",
    ],
    datetime: "May 2020 - Present",
    link: "https://neps.com.ar/",
  },
];

export const Experience = () => {
  const [showWork, setShowWork] = useState(0);
  return (
    <div className="flex flex-row  w-full   ">
      <div className=" text-green-subtitle-v1 ">
        <ol className="flex flex-row  ml-36 list-decimal ">
          <li className="list-none"></li>
          <li className="text-green-subtitle-v1 text-4xl ">
            <h2 className="text-green-subtitle ">
              <Text tid="_workme" />
            </h2>
          </li>
        </ol>
        <div className="flex flex-row ml-32 mt-12">
          <div className="flex flex-col font-mono ">
            {works.map((work, index) => (
              <div className="ml-3">
                <hr
                  className={`absolute left-90 -ml-4 w-0.5 h-10 border-none ${
                    index === showWork
                      ? "bg-green-subtitle transition-colors "
                      : " bg-green-subtitle-v1 transition-colors "
                  }`}
                />
                <button className="h-10 " onClick={() => setShowWork(index)}>
                  {work.job}
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col ml-32 justify-center w-4/5 ">
            <div className="">
              <span className="font-sans text-gray-light font-bold text-xl">
                {works[showWork].title}
              </span>
              <a
                href={works[showWork].link}
                target="_blank"
                className="ml-4 text-green-subtitle-v1 font-bold font-sans text-xl"
                rel="noreferrer"
              >
                @ {works[showWork].job}
              </a>
            </div>
            <span className="font-mono">{works[showWork].datetime}</span>
            <ul className="list-disc text-green-subtitle marker:content-['▹']">
              {works[showWork].description.map((d) => (
                <li className="mt-3">
                  <span className="ml-2 text-green-subtitle-v1">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
