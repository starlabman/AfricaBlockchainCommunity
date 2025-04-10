import React from "react";
import { motion } from "framer-motion";

const partnerLogos = [
  {
    id: 1,
    type: "background",
    style: "bg-[url(/clip-path-group.png)]",
  },
  {
    id: 2,
    type: "image",
    src: "/wwwbwrfpwng70lo521jtnoclezo-svg.svg",
  },
  {
    id: 3,
    type: "image",
    src: "/x8xm0ndkrxccgjm7mybomnul0-svg.svg",
  },
  {
    id: 4,
    type: "background",
    style: "bg-[url(/clip-path-group-1.png)]",
  },
  {
    id: 5,
    type: "image",
    src: "/xnqleexyakcolsbicsyab8t5kjk-svg.svg",
  },
  {
    id: 6,
    type: "image",
    src: "/vpm4l8sqacurzrkpepionaybqje-svg.svg",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 px-6 md:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
        {/* Texte d’intro */}
        <div className="lg:max-w-xl space-y-6">
          <p className="text-[#4e5cbc] text-base font-medium">Our Partners</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#060606] leading-tight">
            They Believe in Us and Support Our Vision
          </h2>
          <p className="text-[#6d6d88] text-base font-light">
            With their trust and support, we accelerate innovation, train new
            talent, and bring ambitious projects to fruition. Together, we are
            building a strong and inclusive Web3 future for the continent.
          </p>
        </div>

        {/* Grille des logos */}
        {/* Logos */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-10 mt-6 lg:mt-12">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15, rotate: 2.5 }}
              className="w-[140px] h-[40px] flex items-center justify-center relative"
            >
              {logo.type === "image" ? (
                <img
                  src={logo.src}
                  alt={`Partner ${logo.id}`}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div
                  className={`${logo.style} bg-no-repeat bg-contain bg-center w-full h-full`}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
