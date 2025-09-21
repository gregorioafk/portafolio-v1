import { Text } from "../context/LanguageContext";

const tecnologies = [
  "Javascript (ES6+)",
  "Typescript",
  "React",
  "React Native",
  "Node.js",
  "C#",
  "Java",
  "SQL",
];

export const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-4xl px-4 py-8 pt-16 md:pt-8">
      <div className="flex flex-col font-mono justify-center w-full lg:w-2/3">
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">
            <Text tid="_aboutme" />
          </h2>
        </div>
        <div className="text-gray-600 max-w-full lg:max-w-2xl space-y-4">
          <p className="leading-relaxed text-sm">
            <Text tid="_aboutme_intro" />
          </p>
          <p className="leading-relaxed text-sm">
            <Text tid="_aboutme_experience" />
          </p>
          <p className="leading-relaxed text-sm">
            <Text tid="_aboutme_tech" />
          </p>
        </div>
        <ul className="text-gray-700 grid grid-cols-2 gap-1 mt-4 text-xs">
          {tecnologies.map((t, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/3 flex justify-center items-center mt-8 lg:mt-0">
        <div className="w-32 h-32 bg-gray-100 border border-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-xs">Profile Image</span>
        </div>
      </div>
    </div>
  );
};
