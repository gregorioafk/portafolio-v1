import React, { useState } from "react";
import { Text } from "../context/LanguageContext";

const works = [
  {
    job: "SatoshiTango",
    title: "Front-end developer",
    description:
      "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.",
    datetime: "May 2020 - Present",
  },
  {
    job: "Legal Surf",
    title: "Front-end developer",
    description:
      "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.",
    datetime: "May 2020 - Present",
  },
  {
    job: "Osprera",
    title: "Backend Developer",
    description:
      "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.",
    datetime: "May 2020 - Present",
  },
  {
    job: "NEPS",
    title: "Backend developer",
    description:
      "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.",
    datetime: "May 2020 - Present",
  },
];

export const Experience = () => {
  const [showWork, setShowWork] = useState(0);
  return (
    <div className=" text-green-subtitle-v1">
      <ol className="flex flex-row gap-12  list-decimal ">
        <li className="list-none"></li>
        <li className="text-green-subtitle-v1 text-4xl ">
          <h2 className="text-green-subtitle ">
            <Text tid="_workme" />
          </h2>
        </li>
      </ol>
      <div className="flex flex-row ">
        <div className="flex flex-col font-mono ml-4">
          {works.map((work, index) => (
            <div className="ml-3">
              <hr
                className={`absolute left-1 -ml-0.5 w-0.5 h-36 bg-green-subtitle ${
                  index === showWork
                    ? "bg-green-subtitle-v1 delay-75"
                    : "bg-green-subtitle delay-75"
                } delay-100`}
              />
              <button className="h-36 bg-" onClick={() => setShowWork(index)}>
                {work.job}
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center ">
          <span>{works[showWork].title}</span>
          <span>{works[showWork].description}</span>
          <span>{works[showWork].datetime}</span>
        </div>
      </div>
    </div>
  );
};
