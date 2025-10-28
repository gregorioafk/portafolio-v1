import React, { useState } from "react";
import { Text } from "../context/LanguageContext";

const works = [
  {
    job: "Bidcom",
    title: "Full-stack Developer",
    description: [
      "Designed and implemented AI-driven agents (RAG architecture) powered by vector databases",
      "Developed and shipped new web features across React, Next.js, and Angular applications",
      "Migrated and modernized legacy systems to scalable, maintainable architectures",
      "Tech Stack: React, Angular, Next.js, Node.js, TypeScript, MySQL, PostgreSQL, Jest",
    ],
    datetime: "April 2025 - Present",
    link: "https://www.bidcom.com.ar/",
  },
  {
    job: "Baufest",
    title: "Software Engineer",
    description: [
      "Designed and established the technical architecture of projects",
      "Led and guided team members in fulfilling technical requirements",
      "Made crucial technical decisions such as technology selection and frameworks",
      "Participated in project planning and estimating resources and effort required",
      "Tech Stack: React, Angular, .NET, Node.js, Ionic, TypeScript, MySQL, MongoDB, IIS",
    ],
    datetime: "Jul 2022 - April 2025",
    link: "https://www.baufest.com/",
  },
  {
    job: "Legal Surf",
    title: "Full-stack Developer",
    description: [
      "Developed and maintained a clean, secure, and user-friendly UI/UX",
      "Planned and implemented strategic technology decisions, aligning with business goals",
      "Played a key role in shaping the technical architecture and optimizing backend services",
      "Tech Stack: React, React Native, Angular, TypeScript, Node.js, GraphQL, Apollo, MongoDB, PostgreSQL, Prisma",
    ],
    datetime: "Jul 2021 - Jun 2022",
    link: "https://legal.surf/",
  },
  {
    job: "Osprera",
    title: "Full-stack Developer",
    description: [
      "Worked with customers to collect, clarify and capture requirements",
      "Responsible for core components implementation and architecture",
      "Developed modules both in the back and front-end side",
      "Consumed government's API",
      "Tech Stack: React, Angular, TypeScript, .NET, Node.js, NHibernate, MySQL",
    ],
    datetime: "Dec 2019 - Jul 2021",
    link: "https://www.osprera.org.ar/",
  },
  {
    job: "NEPS",
    title: "Full-stack Developer",
    description: [
      "Maintained and developed the core client of the company",
      "Decision making of core functionalities of the product",
      "Tech Stack: Angular, TypeScript, .NET, NHibernate, MySQL",
    ],
    datetime: "Nov 2018 - Nov 2019",
    link: "https://neps.com.ar/",
  },
];

export const Experience = () => {
  const [showWork, setShowWork] = useState(0);
  return (
    <div className="flex flex-row w-full ">
      <div className=" text-green-subtitle-v1 ">
        <ol className="flex flex-row  md:ml-36 list-decimal ">
          <li className="list-none"></li>
          <li className="text-green-subtitle-v1 text-4xl ">
            <h2 className="text-green-subtitle ">
              <Text tid="_workme" />
            </h2>
          </li>
        </ol>
        <div className="flex lg:flex-row sm:flex-col sm:justify-center lg:ml-32 lg:mt-12 sm:mt-12 sm:ml-16">
          <div className="flex lg:flex-col sm:flex-row font-mono ">
            {works.map((work, index) => (
              <div className="lg:ml-3 sm:ml-10">
                <hr
                  className={`absolute  left-90 lg:ml-4 lg:w-0.5 sm:h-0.5 sm:w-40 lg:h-10 border-none ${
                    index === showWork
                      ? "bg-green-subtitle transition-colors "
                      : " bg-green-subtitle-v1 transition-colors "
                  }`}
                />
                <button
                  className="lg:h-10 lg:ml-7 "
                  onClick={() => setShowWork(index)}
                >
                  {work.job}
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:ml-32 sm:ml-12 sm:mt-6 justify-center w-4/5 ">
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
