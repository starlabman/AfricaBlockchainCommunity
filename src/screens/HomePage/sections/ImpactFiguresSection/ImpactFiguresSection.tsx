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
    <section className="w-full max-w-[1134px] mx-auto my-8 bg-[#060606] rounded-2xl overflow-hidden relative">
      <div className="relative w-full h-[474px]">
        {/* Background decorative elements */}
        <div className="absolute w-full h-[756px] top-0 left-0 -rotate-180 opacity-50">
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
        <div className="absolute w-[387px] h-[404px] top-[360px] right-0 rotate-[25.27deg] opacity-30">
          <div className="relative h-[404px] overflow-hidden">
            {/* Only including a few representative decorative elements to keep the code manageable */}
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
            {/* More decorative elements would be here */}
          </div>
        </div>

        {/* Main content container */}
        <div className="flex flex-row justify-between p-10 h-full relative z-10">
          {/* Left side content */}
          <div className="flex flex-col w-[407px] justify-between">
            <div>
              <p className="font-medium text-[#8f9eff] text-base mb-6">
                Our Values
              </p>

              {/* Profile avatars */}
              <div className="flex items-center mb-4">
                {avatarColors.map((color, index) => (
                  <div
                    key={index}
                    className={`relative w-11 h-11 ${color} rounded-[22px] border-[3px] border-solid border-black ${index > 0 ? "-ml-4" : ""}`}
                  />
                ))}
              </div>

              {/* Main heading */}
              <div className="mb-4">
                <h2 className="text-white text-[40px] font-normal tracking-[-0.72px] leading-[52.8px] [font-family:'Product_Sans-Regular',Helvetica]">
                  Join Excellence,
                </h2>
                <h2 className="text-white text-[40px] font-normal tracking-[-0.72px] leading-[52.8px] [font-family:'Product_Sans-Regular',Helvetica]">
                  Build the Future with us
                </h2>
              </div>

              {/* Description */}
              <p className="text-[#aaaabe] text-base leading-[19.6px] mb-8 [font-family:'Product_Sans_Light-Regular',Helvetica]">
                Joining the Africa Blockchain Community means joining a network
                of innovators, experts, and enthusiasts shaping the future of
                Web3 in Africa. Here, you'll gain access to unique
                opportunities, strategic collaborations, and an ecosystem that
                values excellence, sharing, and impact. Be part of the change
                today!
              </p>
            </div>

            {/* CTA Button */}
            <Button className="bg-white text-[#2d6ef7] rounded-[200px] w-fit px-10 py-2.5 shadow-[0px_0px_50px_#d4dffbd4] hover:bg-white/90">
              Join us
            </Button>
          </div>

          {/* Right side values */}
          <div className="flex flex-col w-[370px] gap-6 mt-6">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col gap-[5px]">
                <h3 className="font-bold text-[#bac3ff] text-lg leading-[19.6px] [font-family:'Product_Sans-Bold',Helvetica]">
                  {value.title}
                </h3>
                <p className="text-[#aaaabe] text-base leading-[19.6px] [font-family:'Product_Sans-Regular',Helvetica]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
