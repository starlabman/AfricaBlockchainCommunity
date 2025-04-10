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
            Comming soon
          </span>
        </Badge>

        <div className="flex flex-col gap-2 max-w-[689px]">
          <h2 className="[font-family:'Product_Sans-Regular',Helvetica] text-white text-[27.9px] tracking-[-0.48px] leading-[35.2px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </h2>

          <p className="[font-family:'Product_Sans_Light-Regular',Helvetica] text-white text-base max-w-[685px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis
          </p>
        </div>

        <Button
          variant="link"
          className="p-0 h-auto text-white hover:text-white/90 [font-family:'Product_Sans-Regular',Helvetica] text-base"
        >
          Learn more
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
