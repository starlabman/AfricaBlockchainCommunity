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
    <section className="flex flex-col items-center justify-center gap-6 px-6 py-20 bg-white w-full md:px-[223px]">
      <div className="font-normal text-2xl text-center tracking-[-0.48px] leading-[1.5] font-sans max-w-4xl">
        {textContent.map((segment, index) => (
          <span
            key={index}
            className={`${segment.highlight ? "text-black" : "text-[#aaaabe]"} tracking-[-0.12px]`}
          >
            {segment.text}
          </span>
        ))}
      </div>

      <Button
        variant="outline"
        className="rounded-[100px] border-[#2d6ef7] text-[#2d6ef7] hover:bg-[#2d6ef7] hover:text-white transition-colors px-10 py-2.5 text-sm tracking-[-0.28px] leading-[19.3px] font-normal"
      >
        Learn About Us
      </Button>
    </section>
  );
};