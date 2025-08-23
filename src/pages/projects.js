import React from "react";
import { Text } from "../context/LanguageContext";

const projects = [
  {
    name: "LetBookly",
    url: "https://letbookly.com",
    description: "Booking platform for vacation rentals and accommodations",
    preview: "https://letbookly.com/favicon.ico"
  },
  {
    name: "Innova Hipotecaria", 
    url: "https://innovahipotecaria.com",
    description: "Mortgage and real estate services platform",
    preview: "https://innovahipotecaria.com/favicon.ico"
  },
  {
    name: "Legal Surf",
    url: "https://legal.surf", 
    description: "Legal services and consultation platform",
    preview: "https://legal.surf/favicon.ico"
  },
  {
    name: "Kalo Engine",
    url: "https://kaloengine.com",
    description: "Advanced analytics and data processing engine",
    preview: "https://kaloengine.com/favicon.ico"
  }
];

export const Projects = () => {
  return (
    <div className="flex flex-col font-mono justify-center w-full max-w-6xl mx-auto px-4 py-8 pt-16 md:pt-8">
      <div>
        <ol className="flex flex-row gap-4 lg:gap-12 ml-4 lg:ml-14 list-decimal after:h-0.5 after:w-1/2 after:ml-4 lg:after:ml-10 after:bg-green-subtitle-v1 items-center">
          <li className="text-green-subtitle-v1 text-2xl lg:text-4xl">
            <h2 className="text-green-subtitle">
              <Text tid="_projects" />
            </h2>
          </li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-green-subtitle-v1 rounded-lg p-4 md:p-6 hover:border-green-subtitle transition-colors duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-green-subtitle text-lg md:text-xl group-hover:text-green-subtitle-v1 transition-colors duration-300">
                {project.name}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-subtitle-v1 hover:text-green-subtitle transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mb-4 h-24 md:h-32 bg-green-dark rounded border border-green-subtitle-v1/20 flex items-center justify-center">
              <div className="text-green-subtitle-v1 text-xs md:text-sm text-center">
                Website Preview
                <br />
                <span className="text-xs break-all">{project.url}</span>
              </div>
            </div>
            
            <p className="text-green-subtitle-v1 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
