import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PartnershipsSection = (): JSX.Element => {
  // Data for the progress indicators
  const progressItems = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <section className="w-full max-w-[1134px] mx-auto my-8 relative">
      <Card className="w-full h-[469px] rounded-2xl overflow-hidden bg-[url(/corporate-businessman-giving-presentation-large-audience-1.png)] bg-cover bg-center">
        <CardContent className="p-0 h-full relative">
          <div className="flex items-center gap-5 absolute top-[33px] left-1/2 -translate-x-1/2">
            {progressItems.map((item, index) => (
              <div
                key={index}
                className="relative w-[88px] h-[5px] bg-white rounded"
              >
                {item.active && (
                  <div className="w-3/4 h-[5px] bg-black rounded" />
                )}
              </div>
            ))}
          </div>

          <div className="absolute w-[408px] h-24 bottom-[112px] left-10">
            <h2 className="font-normal text-white text-[34px] tracking-[-0.72px] leading-normal mb-3">
              Conferences and Panels
            </h2>
            <p className="font-normal text-white text-lg tracking-[-0.72px] leading-normal max-w-[403px]">
              Meetings with Web3 experts and leaders to explore trends and
              opportunities.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
