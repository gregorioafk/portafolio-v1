import React from "react";
import { Text } from "../context/LanguageContext";

const services = [
  {
    title: "_web_development",
    description: "_web_development_desc",
    icon: "💻",
  },
  {
    title: "_mobile_development", 
    description: "_mobile_development_desc",
    icon: "📱",
  },
  {
    title: "_software_maintenance",
    description: "_software_maintenance_desc", 
    icon: "🔧",
  },
  {
    title: "_consulting",
    description: "_consulting_desc",
    icon: "💡",
  },
];

export const Services = () => {
  return (
    <div className="flex flex-col font-mono justify-center w-full max-w-6xl mx-auto px-4 py-8 pt-16 md:pt-8">
      <div>
        <ol className="flex flex-row gap-4 lg:gap-12 ml-4 lg:ml-14 list-decimal after:h-0.5 after:w-1/2 after:ml-4 lg:after:ml-10 after:bg-green-subtitle-v1 items-center">
          <li className="text-green-subtitle-v1 text-2xl lg:text-4xl">
            <h2 className="text-green-subtitle">
              <Text tid="_services_title" />
            </h2>
          </li>
        </ol>
      </div>
      
      <p className="text-green-subtitle-v1 max-w-full lg:max-w-3xl mt-6 lg:mt-7 leading-relaxed">
        <Text tid="_services_description" />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-green-subtitle-v1 rounded-lg p-4 md:p-6 hover:border-green-subtitle transition-colors duration-300"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{service.icon}</span>
              <h3 className="text-green-subtitle text-lg md:text-xl">
                <Text tid={service.title} />
              </h3>
            </div>
            <p className="text-green-subtitle-v1 text-sm md:text-base leading-relaxed">
              <Text tid={service.description} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};