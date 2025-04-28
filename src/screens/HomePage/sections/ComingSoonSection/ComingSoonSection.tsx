import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const ComingSoonSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[260px] bg-[url(/44420740-9067415-1-1.png)] bg-cover bg-center">
      <div className="container flex flex-col max-w-[936px] items-start gap-[17px] py-[45px]">
        <Badge
          variant="outline"
          className="bg-[#fcfcfc] text-[#2d6ef7] font-bold shadow-[0px_4px_100px_#9ca7ff] px-4 py-1.5"
        >
          <span className="[font-family:'Product_Sans-Bold',Helvetica] text-sm tracking-[-0.28px] leading-[19.3px]">
            Coming soon
          </span>
        </Badge>

        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-white text-2xl md:text-4xl font-normal [font-family:'Product_Sans-Regular',Helvetica]">
            EthAfrique: Empowering African Ethereum Ecosystem
          </h2>
          <p className="text-[#989898] text-base md:text-lg max-w-[600px] tracking-[-0.72px] [font-family:'Product_Sans_Light-Regular',Helvetica]">
            Join us at EthAfrique, a groundbreaking initiative dedicated to fostering Ethereum adoption and blockchain innovation across Africa. 
            Together, we're building a vibrant community of developers, entrepreneurs, and enthusiasts shaping the future of Web3 in Africa.
          </p>
        </div>

        <a 
          href="https://ethafrique.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button
            variant="link"
            className="p-0 h-auto text-white hover:text-white/90 [font-family:'Product_Sans-Regular',Helvetica] text-base"
          >
            Learn more
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
};
