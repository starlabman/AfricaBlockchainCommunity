import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const ComingSoonSection = (): JSX.Element => {
  return (
    <section id="coming-soon" className="relative w-full min-h-[260px] sm:min-h-[280px] md:min-h-[300px] bg-[url(/44420740-9067415-1-1.png)] bg-cover bg-center">
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
      
      {/* Contenu */}
      <div className="relative h-full flex flex-col justify-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Badge
            variant="outline"
            className="bg-white/95 text-[#2d6ef7] font-bold shadow-lg backdrop-blur-sm px-3 sm:px-4 py-1.5 border-none"
          >
            <span className="font-sans text-xs sm:text-sm md:text-base tracking-[-0.28px]">
              Coming soon
            </span>
          </Badge>
          <Badge
            variant="outline"
            className="bg-white/95 text-[#2d6ef7] font-bold shadow-lg backdrop-blur-sm px-3 sm:px-4 py-1.5 border-none"
          >
            <span className="font-sans text-xs sm:text-sm md:text-base tracking-[-0.28px]">
              1-2 August 2025
            </span>
          </Badge>
        </div>

        {/* Texte principal */}
        <div className="flex flex-col gap-3 sm:gap-4 max-w-[689px] mb-6 sm:mb-8">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal font-sans leading-[1.2] tracking-[-0.48px]">
            EthAfrique: Empowering African Ethereum Ecosystem
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-light">
            Join us at EthAfrique, a groundbreaking initiative dedicated to fostering Ethereum adoption and blockchain innovation across Africa. Together, we're building a vibrant community of developers, entrepreneurs, and enthusiasts.
          </p>
        </div>

        {/* Bouton */}
        <a 
          href="https://ethafrique.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mx-auto inline-flex items-center px-6 py-2 bg-[#2d6ef7] hover:bg-[#2d6ef7]/90 text-white rounded-lg transition-colors group"
        >
          <span className="[font-family:'Product_Sans-Regular',Helvetica] text-base font-medium">Learn more</span>
          <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};
