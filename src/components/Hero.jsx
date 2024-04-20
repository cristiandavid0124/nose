import React from "react";

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
    {/* Information */}
    <div className="md:col-span-5 flex items-center justify-start p-8 xl:p-16 pr-4"> {/* Reducir el margen derecho con `pr-4` */}
      <div className="flex flex-col gap-8 max-w-[600px]">
        <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
          Swipe Your{" "}
          <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
            Style
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
          </span>
        </h1>
        <p className="text-gray-500 text-2xl leading-[2.5rem]">
          Tu estilo, tu armario, tu elección.
          Explora infinitas combinaciones, crea looks únicos y muestra tu estilo con confianza.
          Con Swipe Your Style, tu armario virtual siempre te inspira para brillar en cada ocasión.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
            Contact Us
          </button>
        </div>
      </div>
    </div>
    {/* Image */}
    <div className="md:col-span-3 flex items-center justify-start relative -ml-8 md:ml-50">
      <div className="max-w-[1000px]"> {/* Ajusté el ancho máximo */}
        {/* Content image */}
        <div>
          <img
            src="hero.png"
            className="w-[100px] h-[1000px] md:w-[800px] md:h-[320px] object-cover xl:-mt-15"
          />
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>
      </div>
    </div>

    </section>
  );
};

export default Hero;
