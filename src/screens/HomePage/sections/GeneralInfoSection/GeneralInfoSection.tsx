import React from "react";

export const GeneralInfoSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    {
      id: 1,
      href: "https://twitter.com/afroblockchain_",
      src: "/lpyn0v6vjxpc4eim0cgpdmh32t8-svg.svg",
      alt: "Twitter",
    },
    {
      id: 2,
      href: "https://linkedin.com/compagny/afroblockchain_",
      src: "/link---img.svg",
      alt: "LinkedIn",
    },
    {
      id: 3,
      href: "https://github.com/afroblockchain",
      src: "/link---img-1.svg",
      alt: "GitHub",
    },
  ];

  // Footer links data
  const footerLinks = [
    { id: 1, text: "Privacy Policy", href: "/privacy-policy" },
    { id: 2, text: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <footer className="flex flex-col w-full items-start gap-20 px-20 py-[38px]">
      {/* Top row with logo and social media icons */}
      <div className="flex items-center justify-between w-full">
        {/* Logo agrandi */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-[60px] h-[70px] bg-[url(/vector-360.svg)] bg-[100%_100%]">
            <div className="relative w-[30px] h-[30px] top-[18px] left-[15px] bg-[url(/intersect.svg)] bg-[100%_100%]" />
          </div>
        </div>

        {/* Social media icons avec liens */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src={link.src}
                alt={link.alt}
                className="w-[32px] h-[32px]"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between w-full">
        <div className="font-normal text-[#6d6d88] text-sm leading-[19.6px]">
          © 2025 ABC.
        </div>

        {/* Footer links avec <a> */}
        <div className="flex items-center gap-12">
          {footerLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-[#6d6d88] text-sm hover:text-white transition"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
