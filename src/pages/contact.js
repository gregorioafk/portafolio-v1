import React from "react";
import { Text } from "../context/LanguageContext";

export const Contact = () => {
  const phoneNumber = "+541123797550";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;
  const email = "contact@miguelangel.dev";

  return (
    <div className="flex flex-col font-mono justify-center w-full max-w-6xl mx-auto px-4 py-8 pt-16 md:pt-8">
      <div>
        <ol className="flex flex-row gap-4 lg:gap-12 ml-4 lg:ml-14 list-decimal after:h-0.5 after:w-1/2 after:ml-4 lg:after:ml-10 after:bg-green-subtitle-v1 items-center">
          <li className="text-green-subtitle-v1 text-2xl lg:text-4xl">
            <h2 className="text-green-subtitle">
              <Text tid="_contact" />
            </h2>
          </li>
        </ol>
      </div>

      <div className="mt-8 text-center">
        <p className="text-green-subtitle-v1 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Ready to work together? Let's discuss your next project and bring your ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-green-subtitle-v1 text-green-subtitle-v1 hover:bg-green-subtitle hover:text-green-dark  px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
            </svg>
            WhatsApp
          </a>

          <a
            href={`mailto:${email}`}
            className="flex items-center bg-transparent border border-green-subtitle-v1 text-green-subtitle-v1 hover:bg-green-subtitle hover:text-green-dark px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
};
