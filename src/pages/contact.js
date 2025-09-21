import React from "react";

export const Contact = () => {
  const phoneNumber = "+541123797550";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;
  const email = "miguelangel.rojastech@gmail.com";

  return (
    <div className="flex flex-col font-mono justify-center w-full max-w-4xl px-4 mb-16">
      <h2 className="text-black text-lg font-semibold mb-2">
        Contact
      </h2>

      <p className="text-gray-600 mb-4 text-sm">
        Ready to work together? Let's discuss your next project and bring your ideas to life.
      </p>

      <ul className="space-y-2 text-sm">
        <li className="flex items-start">
          <span className="text-gray-400 mr-2">•</span>
          <div>
            <strong className="text-black">WhatsApp:</strong>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              {phoneNumber}
            </a>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-2">•</span>
          <div>
            <strong className="text-black">Email:</strong>
            <a
              href={`mailto:${email}`}
              className="text-blue-600 hover:underline ml-1"
            >
              {email}
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
