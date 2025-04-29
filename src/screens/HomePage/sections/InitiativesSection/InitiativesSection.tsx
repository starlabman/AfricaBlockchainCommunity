import React from "react";
import { Button } from "../../../../components/ui/button";

export const InitiativesSection = (): JSX.Element => {
  // Text content with formatting information
  const textContent = [
    { text: "The Africa Blockchain Community is ", highlight: false },
    { text: "revolutionizing", highlight: true },
    { text: " the blockchain landscape across Africa. We are a ", highlight: false },
    { text: "dynamic community of innovators", highlight: true },
    { text: " dedicated to ", highlight: false },
    { text: "empowering African talent", highlight: true },
    { text: " in blockchain technology. Through our ", highlight: false },
    { text: "comprehensive education programs", highlight: true },
    { text: " and ", highlight: false },
    { text: "hands-on development initiatives", highlight: true },
    { text: ", we're building a robust ecosystem that connects African developers, entrepreneurs, and blockchain enthusiasts. Our mission is to ", highlight: false },
    { text: "drive blockchain adoption", highlight: true },
    { text: " and foster ", highlight: false },
    { text: "technological innovation", highlight: true },
    { text: " across the continent.", highlight: false },
  ];

  return (
    <section id="initiatives" className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          <div className="font-normal text-base sm:text-lg md:text-2xl text-center tracking-[-0.48px] leading-[1.6] font-sans max-w-4xl">
            {textContent.map((segment, index) => (
              <span
                key={index}
                className={`${
                  segment.highlight ? "text-black font-medium" : "text-[#aaaabe]"
                } tracking-[-0.12px] transition-colors duration-300`}
              >
                {segment.text}
              </span>
            ))}
          </div>

          <Button
            variant="outline"
            className="rounded-[100px] border-[#2d6ef7] text-[#2d6ef7] hover:bg-[#2d6ef7] hover:text-white transition-all duration-300 px-6 sm:px-8 py-2.5 text-sm sm:text-base tracking-[-0.28px] leading-[1.2] font-normal hover:scale-105 hover:shadow-lg"
            asChild
          >
            <a 
              href="https://bento.me/africablockchaincommunity" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Learn About Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};