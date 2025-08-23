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
    <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 py-8 pt-16 md:pt-8">
      <div className="flex flex-col font-mono justify-center w-full lg:w-2/3">
        <div>
          <ol className="flex flex-row gap-4 lg:gap-12 ml-4 lg:ml-14 list-decimal after:h-0.5 after:w-1/2 after:ml-4 lg:after:ml-10 after:bg-green-subtitle-v1 items-center">
            <li className="text-green-subtitle-v1 text-2xl lg:text-4xl">
              <h2 className="text-green-subtitle">
                <Text tid="_aboutme" />
              </h2>
            </li>
          </ol>
        </div>
        <div className="text-green-subtitle-v1 max-w-full lg:max-w-3xl mt-6 lg:mt-7 space-y-6">
          <p className="leading-relaxed">
            <Text tid="_aboutme_intro" />
          </p>
          <p className="leading-relaxed">
            <Text tid="_aboutme_experience" />
          </p>
          <p className="leading-relaxed">
            <Text tid="_aboutme_tech" />
          </p>
        </div>
        <ul className="list-disc text-green-subtitle marker:content-['▹'] grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6 ml-6 max-w-lg">
          {tecnologies.map((t, index) => (
            <li key={index}>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/3 flex justify-center items-center mt-8 lg:mt-0">
        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-green-dark rounded-lg border border-green-subtitle-v1/20 flex items-center justify-center">
          <span className="text-green-subtitle-v1 text-sm">Profile Image</span>
        </div>
      </div>
    </div>
  );
};
