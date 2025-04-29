import React from "react";
import { Button } from "../../../../components/ui/button";

export const ImpactFiguresSection = (): JSX.Element => {
  // Values data for mapping
  const values = [
    {
      title: "Innovation",
      description:
        "We explore and develop blockchain solutions adapted to African realities for a lasting technological impact.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of the collective: together, we are building an inclusive and dynamic Web3 ecosystem.",
    },
    {
      title: "Impact",
      description:
        "Each action aims to transform industries and create new opportunities for the community and the local economy.",
    },
  ];

  // Avatar colors for the profile circles
  const avatarColors = [
    "bg-[#132ad2]",
    "bg-[#3c52f4]",
    "bg-[#6174fe]",
    "bg-[#9ca7ff]",
  ];

  return (
    <section id="impact" className="w-full px-4 sm:px-6 lg:px-8 my-8">
      <div className="max-w-[1134px] mx-auto bg-[#060606] rounded-2xl overflow-hidden relative">
        <div className="relative min-h-[474px] sm:min-h-[500px] md:min-h-[474px]">
          {/* Background decorative elements */}
          <div className="absolute w-full h-[756px] top-0 left-0 -rotate-180 opacity-50 pointer-events-none hidden sm:block -z-10">
            <div className="relative h-[622px] top-[25px]">
              <img
                className="absolute w-[362px] h-[362px] top-0 left-[13px] rotate-180"
                alt="Vector"
                src="/vector-14.svg"
              />
              <img
                className="absolute w-full h-[474px] top-[148px] left-0 rotate-180"
                alt="Group"
                src="/group.png"
              />
            </div>
          </div>

          {/* Decorative pattern on the right side */}
          <div className="absolute w-[387px] h-[404px] top-[360px] right-0 rotate-[25.27deg] opacity-30 pointer-events-none hidden lg:block -z-10">
            <div className="relative h-[404px] overflow-hidden">
              <img
                className="absolute w-[63px] h-12 top-[149px] left-[186px] rotate-[-25.27deg]"
                alt="Vector"
                src="/vector-304.svg"
              />
              <img
                className="absolute w-[73px] h-[55px] top-[118px] left-[238px] rotate-[-25.27deg]"
                alt="Vector"
                src="/vector-8.svg"
              />
              <img
                className="absolute w-[69px] h-[51px] top-[148px] left-[180px] rotate-[-25.27deg]"
                alt="Vector"
                src="/vector-290.svg"
              />
            </div>
          </div>

          {/* Main content container */}
          <div className="flex flex-col lg:flex-row justify-between p-6 sm:p-8 lg:p-10 h-full relative z-10 gap-8 lg:gap-12">
            {/* Left side content */}
            <div className="flex flex-col justify-between lg:w-[407px]">
              <div>
                <p className="font-medium text-[#8f9eff] text-sm sm:text-base mb-4 sm:mb-6">
                  Our Values
                </p>

                {/* Profile avatars */}
                <div className="flex items-center mb-4">
                  {avatarColors.map((color, index) => (
                    <div
                      key={index}
                      className={`relative w-9 sm:w-11 h-9 sm:h-11 ${color} rounded-[22px] border-[3px] border-solid border-black ${
                        index > 0 ? "-ml-3 sm:-ml-4" : ""
                      }`}
                    />
                  ))}
                </div>

                {/* Main heading */}
                <div className="mb-4">
                  <h2 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-[-0.72px] leading-[1.3] font-sans">
                    Join Excellence,
                    <br />
                    Build the Future with us
                  </h2>
                </div>

                {/* Description */}
                <p className="text-[#aaaabe] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-light">
                  Joining the Africa Blockchain Community means joining a network
                  of innovators, experts, and enthusiasts shaping the future of
                  Web3 in Africa. Here, you'll gain access to unique
                  opportunities, strategic collaborations, and an ecosystem that
                  values excellence, sharing, and impact. Be part of the change
                  today!
                </p>
              </div>

              {/* CTA Button */}
              <Button 
                className="bg-white text-[#2d6ef7] rounded-[200px] w-fit px-6 sm:px-8 py-2.5 shadow-[0px_0px_50px_#d4dffbd4] hover:bg-white/90 text-sm sm:text-base mt-6 sm:mt-8 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a 
                  href="https://bento.me/africablockchaincommunity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Join us
                </a>
              </Button>
            </div>

            {/* Right side values */}
            <div className="flex flex-col lg:w-[370px] gap-6 mt-0 lg:mt-6">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col gap-2 sm:gap-[5px]">
                  <h3 className="font-bold text-[#bac3ff] text-base sm:text-lg leading-tight font-sans">
                    {value.title}
                  </h3>
                  <p className="text-[#aaaabe] text-sm sm:text-base leading-relaxed font-normal">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
