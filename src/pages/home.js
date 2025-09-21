import React from "react";

export const Home = () => (
  <div className="flex flex-col font-mono justify-center w-full max-w-4xl px-4">
    <div className="text-gray-600 text-sm mb-2">
      Hello, I'm
    </div>
    <h1 className="text-black text-2xl md:text-3xl font-bold mb-2">
      Miguel Ángel Rojas
    </h1>
    <h2 className="text-gray-600 text-xl md:text-2xl mb-6">
      CEO & Full Stack Developer
    </h2>

    <p className="text-gray-600 max-w-full lg:max-w-2xl text-sm leading-relaxed mb-8">
      I lead a team of developers and create innovative software solutions. With over 5 years of experience, I specialize in building scalable web and mobile applications using modern technologies like React, Node.js, and React Native.
    </p>

    <a
      href="mailto:miguelangel.rojastech@gmail.com"
      className="w-auto px-4 py-2 text-black border border-gray-300 rounded hover:bg-gray-100 text-sm inline-block text-center"
    >
      Get in touch
    </a>
  </div>
);
