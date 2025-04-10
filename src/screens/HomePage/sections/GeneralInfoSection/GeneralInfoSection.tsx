import React from "react";

export const GeneralInfoSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    {
      id: 1,
      src: "/lpyn0v6vjxpc4eim0cgpdmh32t8-svg.svg",
      alt: "Social media icon",
    },
    { id: 2, src: "/link---img.svg", alt: "Link img" },
    { id: 3, src: "/link---img-1.svg", alt: "Link img" },
  ];

  // Footer links data
  const footerLinks = [
    { id: 1, text: "Privacy Policy" },
    { id: 2, text: "Cookie Policy" },
  ];

  return (
    <footer className="flex flex-col w-full items-start gap-20 px-20 py-[38px]">
      {/* Top row with logo and social media icons */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-[40.95px] h-[50px] bg-[url(/vector-360.svg)] bg-[100%_100%]">
            <div className="relative w-[25px] h-[25px] top-3 left-[7px] bg-[url(/intersect.svg)] bg-[100%_100%]" />
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) =>
            link.id === 1 ? (
              <div
                key={link.id}
                className="relative w-[27px] h-[27px] bg-[url(/lpyn0v6vjxpc4eim0cgpdmh32t8-svg.svg)] bg-[100%_100%]"
              />
            ) : (
              <img
                key={link.id}
                className="relative w-[27px] h-[27px]"
                alt={link.alt}
                src={link.src}
              />
            ),
          )}
        </div>
      </div>

      {/* Bottom row with copyright and policy links */}
      <div className="flex items-center justify-between w-full">
        {/* Copyright text */}
        <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6d6d88] text-sm tracking-[0] leading-[19.6px]">
          © 2025 ABC.
        </div>

        {/* Policy links */}
        <div className="flex items-center gap-12">
          {footerLinks.map((link) => (
            <div key={link.id} className="relative">
              <div className="[font-family:'Inter',Helvetica] font-normal text-[#6d6d88] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                {link.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
