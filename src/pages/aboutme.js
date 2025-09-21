export const AboutMe = () => {
  return (
    <div className="flex flex-col font-mono justify-center w-full max-w-4xl px-4">
      <h2 className="text-black text-lg font-semibold mb-2">
        About Me
      </h2>

      <p className="text-gray-600 mb-4 text-sm">
        I'm Miguel Ángel Rojas, CEO and Full Stack Developer with over 5 years of experience building web and mobile applications. I specialize in modern technologies and deliver scalable solutions for businesses of all sizes.
      </p>

      <div className="mb-4">
        <strong className="text-black text-sm">Technologies:</strong>
        <ul className="grid grid-cols-2 gap-1 mt-2 text-xs text-gray-600">
          <li className="flex items-center">
            <span className="text-gray-400 mr-2">•</span>
            Javascript (ES6+)
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 mr-2">•</span>
            Typescript
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 mr-2">•</span>
            React
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 mr-2">•</span>
            React Native
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 mr-2">•</span>
            Node.js
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 mr-2">•</span>
            C#
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 mr-2">•</span>
            Java
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 mr-2">•</span>
            SQL
          </li>
        </ul>
      </div>
    </div>
  );
};
