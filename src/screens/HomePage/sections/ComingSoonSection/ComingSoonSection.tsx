import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const ComingSoonSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[260px] bg-[url(/44420740-9067415-1-1.png)] bg-cover bg-center">
      <div className="container flex flex-col max-w-[936px] items-start gap-[17px] py-[20px]">
        <div className="flex items-center gap-3">
          <Badge
            variant="outline"
            className="bg-[#fcfcfc] text-[#2d6ef7] font-bold shadow-[0px_4px_100px_#9ca7ff] px-4 py-1.5"
          >
            <span className="[font-family:'Product_Sans-Bold',Helvetica] text-sm tracking-[-0.28px] leading-[19.3px]">
              Coming soon
            </span>
          </Badge>
          <Badge
            variant="outline"
            className="bg-[#fcfcfc] text-[#2d6ef7] font-bold shadow-[0px_4px_100px_#9ca7ff] px-4 py-1.5"
          >
            <span className="[font-family:'Product_Sans-Bold',Helvetica] text-sm tracking-[-0.28px] leading-[19.3px]">
              1-2 August 2025
            </span>
          </Badge>
        </div>

        <div className="flex flex-col gap-3 max-w-[689px]">
          <h2 className="text-white text-2xl md:text-[27.9px] font-normal [font-family:'Product_Sans-Regular',Helvetica] leading-[1.25] tracking-[-0.48px]">
            EthAfrique: Empowering African Ethereum Ecosystem
          </h2>
          <p className="text-[#989898] text-sm md:text-base leading-relaxed [font-family:'Product_Sans_Light-Regular',Helvetica]">
            Join us at EthAfrique, a groundbreaking initiative dedicated to fostering Ethereum adoption and blockchain innovation across Africa. Together, we're building a vibrant community of developers, entrepreneurs, and enthusiasts.
          </p>
        </div>

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
