import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactFormSection = (): JSX.Element => {
  // Form field data for mapping
  const inputFields = [
    { id: "firstName", label: "First name", required: true },
    { id: "lastName", label: "Last name", required: true },
    { id: "email", label: "Email", required: true },
    { id: "company", label: "Company or Organisation name", required: false },
  ];

  return (
    <div className="relative w-full bg-[#060606] rounded-2xl overflow-hidden">
      <div className="relative">
        {/* Background elements */}
        <div className="relative bg-[url(/vector-270.svg)] bg-[100%_100%]">
          <img className="w-full" alt="Group" src="/group-54.png" />
        </div>

        <img
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full"
          alt="Ellipse"
          src="/ellipse-263.svg"
        />

        <img
          className="absolute right-0 bottom-0"
          alt="Vector"
          src="/vector-267.svg"
        />

        {/* Content container */}
        <div className="relative z-10 p-8 flex flex-col">
          {/* Heading section */}
          <div className="mb-8">
            <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#4e5cbc] text-base mb-1">
              Get in touch
            </div>

            <h2 className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-white text-[47.8px] tracking-[-0.72px] leading-[52.8px] mb-4">
              Let&#39;s chat
            </h2>

            <p className="[font-family:'Product_Sans_Light-Regular',Helvetica] font-normal text-[#bebebe] text-base leading-[19.6px] max-w-[526px]">
              We would love to answer your questions, discuss your ideas, or
              collaborate with you to advance the blockchain ecosystem in
              Africa. Whether you are interested in our programs, want to learn
              more about our initiatives, or are looking to partner, our team is
              here to help.
            </p>
          </div>

          {/* Form section */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-wrap gap-[16px_10px]">
                {/* Map through input fields */}
                {inputFields.map((field) => (
                  <div key={field.id} className="w-[308px]">
                    <div className="relative">
                      <Input
                        className="h-[53px] bg-white rounded border border-solid border-[#d5d5e8]"
                        placeholder={field.label}
                      />
                      {field.required && (
                        <span className="absolute h-[17px] top-[3px] right-[12px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#ff4836] text-sm">
                          *
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Message textarea */}
                <div className="w-[626px]">
                  <div className="relative">
                    <Textarea
                      className="h-[180px] bg-white rounded border border-solid border-[#d5d5e8]"
                      placeholder="Mesage"
                    />
                    <span className="absolute h-[17px] top-[3px] right-[12px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#ff4836] text-sm">
                      *
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <Button className="mt-6 bg-[#2d6ef7] text-neutral-100 rounded-[200px] px-10 py-2.5 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-sm">
                Submit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
