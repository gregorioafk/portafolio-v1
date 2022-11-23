import { Canvas } from "@react-three/fiber";
import React from "react";
import { ModelRender } from "../components/Canvas";
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
    <div className="flex lg:flex-row sm:flex-col ">
      <div className="flex flex-col font-mono justify-center ">
        <div>
          <ol className="flex flex-row lg:gap-12 lg:ml-14 list-decimal  sm:ml-7 sm:after:h-0.5 sm:after:w-2/4 sm:after:ml-10 after:bg-green-subtitle-v1 lg:after:w-2/4  lg:after:h-0.5 items-center">
            <li className="text-green-subtitle-v1 lg:text-4xl ">
              <h2 className="text-green-subtitle ">
                <Text tid="_aboutme" />
              </h2>
            </li>
          </ol>
        </div>
        <subtitle className="text-green-subtitle-v1 lg:max-w-3xl lg:mt-7">
          Hola, mi nombre es Miguelangel y disfruto de crear cosas. Mi interes
          en la web comenzo en el 2008 cuando mi padre creo un server dedicado
          de Mu online. Mi interes siguio creando servers dedicados de Counter
          Strike 1.6 creando plugins con amx-mod y luego con Minecraft. Creando
          un server dedicado llamado{" "}
          <span className="text-green-text">Minecris</span> creando plugis con
          Java.
        </subtitle>
        {/* <subtitle className="text-green-subtitle-v1 lg:max-w-3xl lg:mt-7">
          Tuve que huir de Venezuela para buscar una mejor vida. Fui a Colombia
          donde hice diversos trabajos, Con ayuda de familia y amigos pude venir
          a Argentina donde vivo actualmente.
        </subtitle>
        <subtitle className="text-green-subtitle-v1 lg:max-w-3xl lg:mt-7">
          Tuve que ponerme al dia con las tecnologias y estudiar para seguir
          adelante con lo que me apasionaba y habia abandonado.
        </subtitle> */}
        <subtitle className="text-green-subtitle-v1 lg:max-w-3xl mt-7">
          Te te presento las tecnologias que hoy en dia domino.
        </subtitle>
        <ul className="list-disc text-green-subtitle marker:content-['▹'] grid grid-cols-2 mt-4 ml-6">
          {tecnologies.map((t) => (
            <li>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:w-56 sm:h-56 lg:w-80 lg:h-80 self-center">
        {/* <ModelRender  w={}/> */}
      </div>
    </div>
  );
};
