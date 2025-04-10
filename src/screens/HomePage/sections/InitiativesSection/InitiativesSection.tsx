import React from "react";
import { Button } from "../../../../components/ui/button";

export const InitiativesSection = (): JSX.Element => {
  // Text content with formatting information
  const textContent = [
    { text: "Noble is ", highlight: false },
    { text: "changing", highlight: true },
    {
      text: " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ",
      highlight: false,
    },
    { text: "praesentium voluptatum ", highlight: true },
    { text: "deleniti ", highlight: false },
    { text: "atque corrupti quos dolores", highlight: true },
    {
      text: " et quas molestias excepturi sint occaecati cupiditate ",
      highlight: false,
    },
    { text: "non provident, similique sunt  ", highlight: true },
    {
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
      highlight: false,
    },
    {
      text: " minus id quod maxime placeat facere possimus, ",
      highlight: true,
    },
    {
      text: "omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe",
      highlight: false,
    },
    { text: " evenie", highlight: true },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-6 px-6 py-20 bg-white w-full md:px-[223px]">
      <div className="font-normal text-2xl text-center tracking-[-0.48px] leading-6 font-sans">
        {textContent.map((segment, index) => (
          <span
            key={index}
            className={`${segment.highlight ? "text-black" : "text-[#aaaabe]"} tracking-[-0.12px] ${!segment.highlight ? "leading-[0.1px]" : ""}`}
          >
            {segment.text}
          </span>
        ))}
      </div>

      <Button
        variant="outline"
        className="rounded-[100px] border-[#2d6ef7] text-[#2d6ef7] px-10 py-2.5 text-sm tracking-[-0.28px] leading-[19.3px] font-normal"
      >
        Learn About us
      </Button>
    </section>
  );
};
