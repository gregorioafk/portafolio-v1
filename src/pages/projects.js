import React from "react";

export const Projects = () => {
  return (
    <div className="flex flex-col font-mono justify-center w-full max-w-4xl px-4">
      <h2 className="text-white text-lg font-semibold mb-2">
        Projects
      </h2>

      <ul className="space-y-3 text-sm">
        <li className="flex items-start">
          <span className="text-gray-400 mr-2">•</span>
          <div>
            <strong className="text-white">Innova Hipotecaria:</strong>
            <span className="text-gray-300 ml-1">Mortgage and real estate services platform</span>
            <br />
            <a href="https://innovahipotecaria.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
              https://innovahipotecaria.com
            </a>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-2">•</span>
          <div>
            <strong className="text-white">Legal Surf:</strong>
            <span className="text-gray-300 ml-1">Legal services and consultation platform</span>
            <br />
            <a href="https://legal.surf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
              https://legal.surf
            </a>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-2">•</span>
          <div>
            <strong className="text-white">Kalo Engine:</strong>
            <span className="text-gray-300 ml-1">Advanced analytics and data processing engine</span>
            <br />
            <a href="https://kaloengine.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
              https://kaloengine.com
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
