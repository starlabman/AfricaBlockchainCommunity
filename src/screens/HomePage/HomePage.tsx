
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
import { CoreTeamSection } from "./sections/CoreTeamSection";

export const HomePage = (): JSX.Element => {
  return (
    <main className="bg-white w-full min-h-screen overflow-x-hidden">
      <div className="bg-white w-full relative">
        {/* Main srections in order based on the layout */}
        <MainContainerSection />
        <HeroBannerSection />

        {/* Partners bar */}
        <section className="w-full py-8 md:py-12 bg-[#01093f] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-[156px] gap-6 md:gap-8">
          <div className="font-normal text-white text-sm sm:text-base tracking-[4.00px] leading-[1.4] font-['Inter'] text-center md:text-left">
            OUR PARTNERS
          </div>
          <div className="w-full md:w-auto max-w-[944px] flex items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
            {/* Just comment */}
            <img
              className="h-6 sm:h-8 md:h-[30px] w-auto object-contain"
              alt="Partner logos"
              src="/web3bridge.jpg"
            />
            <img
              className="h-6 sm:h-8 md:h-[30px] w-auto object-contain"
              alt="Partner logos"
              src="/kilingiants.svg"
            />
           
            <img
              className="h-6 sm:h-8 md:h-[30px] w-auto object-contain"
              alt="Partner logos"
              src="/python_Togo.png"
            />
           

            <img
              className="h-6 sm:h-8 md:h-[30px] w-auto object-contain"
              alt="Partner logos"
              src="/Propel Logo White.png"

            />
           
          </div>
        </section>

        <ComingSoonSection />
        <InitiativesSection />

        {/* Image section */}
        <section className="w-full flex justify-center py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1200px] aspect-[2.18/1] relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 rounded-[18.32px] bg-[url(/image.png)] bg-cover bg-center" />
            <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(30,94,255,0.2)_0%,rgba(8,29,81,0.2)_100%)]" />
          </div>
        </section>

        <StatisticsSection />
        <ImpactFiguresSection />
        <TestimonialsSection />

        <CoreTeamSection />

        <PartnershipsSection />

        {/* Contact and General Info sections */}
        <div className="w-full mt-16 sm:mt-20 md:mt-28">
          <ContactFormSection />
          <GeneralInfoSection />
        </div>
      </div>
    </main>
  );
};