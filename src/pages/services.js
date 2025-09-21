import React from "react";
import { Text } from "../context/LanguageContext";

export const Services = () => {
  return (
    <div className="flex flex-col font-mono justify-center w-full max-w-4xl px-4">
      <h2 className="text-black text-lg font-semibold mb-2">
        Software Services
      </h2>

      <p className="text-gray-600 mb-6 text-sm">
        I offer comprehensive software development services, from web applications to custom solutions tailored to your business needs.
      </p>

      <ul className="space-y-3 text-sm">
        <li className="flex items-start">
          <span className="text-gray-400 mr-2">•</span>
          <div>
            <strong className="text-black">Web Development:</strong>
            <span className="text-gray-600 ml-1">Custom web applications using modern technologies like React, Node.js, and more.</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-2">•</span>
          <div>
            <strong className="text-black">Mobile Development:</strong>
            <span className="text-gray-600 ml-1">Native and cross-platform mobile applications for iOS and Android.</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-2">•</span>
          <div>
            <strong className="text-black">Software Maintenance:</strong>
            <span className="text-gray-600 ml-1">Ongoing support and maintenance for existing software systems.</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-2">•</span>
          <div>
            <strong className="text-black">Technical Consulting:</strong>
            <span className="text-gray-600 ml-1">Expert advice on technology stack selection and software architecture.</span>
          </div>
        </li>
      </ul>
    </div>
  );
};