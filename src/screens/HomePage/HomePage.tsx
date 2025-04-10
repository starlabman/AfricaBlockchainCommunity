import React from "react";
import { ComingSoonSection } from "./sections/ComingSoonSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { GeneralInfoSection } from "./sections/GeneralInfoSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ImpactFiguresSection } from "./sections/ImpactFiguresSection/ImpactFiguresSection";
import { InitiativesSection } from "./sections/InitiativesSection/InitiativesSection";
import { MainContainerSection } from "./sections/MainContainerSection";
import { PartnershipsSection } from "./sections/PartnershipsSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const HomePage = (): JSX.Element => {
  return (
    <main className="bg-white  w-full">
      <div className="bg-white w-full relative">
        {/* Main sections in order based on the layout */}
        <MainContainerSection />
        <HeroBannerSection />

        {/* Partners bar */}
        <section className="w-full h-auto md:h-[138px] bg-[#01093f] flex flex-col md:flex-row items-center justify-between p-6 md:px-[156px] gap-4 md:gap-0">
          <div className="font-normal text-white text-xs tracking-[4.00px] leading-[16.8px] [font-family:'Inter',Helvetica] whitespace-nowrap">
            OUR PARTNERS
          </div>
          <img
            className="w-full md:w-[944px] h-auto md:h-[30px] object-contain"
            alt="Partner logos"
            src="/section-mask-group.svg"
          />
        </section>

        <ComingSoonSection />
        <InitiativesSection />

        {/* Image section */}
        <section className="w-full flex justify-center my-4 md:my-8 px-4 md:px-8">
          <div className="w-full max-w- aspect-[2.18/1] relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 rounded-[18.32px] bg-[url(/image.png)] bg-cover bg-center" />
            <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(30,94,255,0.2)_0%,rgba(8,29,81,0.2)_100%)]" />
          </div>
        </section>

        <StatisticsSection />
        <ImpactFiguresSection />
        <TestimonialsSection />

        <PartnershipsSection />

        {/* Contact and General Info sections */}
        <div className="w-full mt-28">
          <ContactFormSection />
          <GeneralInfoSection />
        </div>
      </div>
    </main>
  );
};