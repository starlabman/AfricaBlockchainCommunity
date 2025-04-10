import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:h-[707px] bg-[#060606]">
      <div className="relative h-full bg-[url(/44420740-9067415-1-1.png)] bg-cover bg-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />

        {/* Content container */}
        <div className="relative flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0">
          <div className="flex flex-col items-center max-w-[803px] gap-4 md:gap-5 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-tight md:leading-[88px] tracking-[-0.58px] font-normal [font-family:'Product_Sans-Regular',Helvetica]">
              <span className="text-white">
                Let&apos;s build the future of{" "}
              </span>
              <span className="text-[#2d6ef7]">Blockchain</span>
              <span className="text-white"> in Africa</span>
            </h1>

            <p className="max-w-[600px] text-base md:text-lg text-[#989898] tracking-[-0.72px] [font-family:'Product_Sans_Light-Regular',Helvetica] px-4 md:px-8">
              Join the community shaping the future of blockchain in Africa.
              Connect, collaborate, and innovate with Web3 enthusiasts, experts,
              and entrepreneurs to build a vibrant and inclusive technology
              ecosystem.
            </p>

            <Button className="mt-6 md:mt-8 px-8 md:px-10 py-2.5 bg-[#2d6ef7] rounded-[200px] text-sm shadow-[0px_0px_50px_#1e5effd4] [font-family:'Product_Sans-Regular',Helvetica] hover:bg-[#2d6ef7]/90 transition-colors">
              Join us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};