import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";

export const MainContainerSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About us", href: "#initiatives" },
    { label: "Programs & Activities", href: "#impact" },
    { label: "Opportunities", href: "#coming-soon" },
    { label: "Contact", href: "#info" },
  ];

  return (
    <header className="flex w-full items-center justify-between px-4 md:px-8 lg:px-16 py-4 sticky top-0 z-50 bg-[#060606]">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-3">
        <div className="relative w-[3rem] h-[3.5rem] bg-[url(/vector-268.svg)] bg-[100%_100%]">
          <div className="relative w-[1.7rem] h-[1.7rem] top-3.5 left-[0.5rem] bg-[url(/intersect.svg)] bg-[100%_100%]" />
        </div>

        <div className="flex flex-col items-start justify-center gap-1">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="[-webkit-text-stroke:0.2px_#ffffff] font-normal text-white text-base md:text-xl tracking-[0.54px]">
              AFRICA
            </span>
            <span className="[-webkit-text-stroke:0.2px_#ffffff] font-normal text-white text-base md:text-xl tracking-[0.54px]">
              BLOCKCHAIN
            </span>
          </div>
          <div className="flex items-center">
            <span className="[-webkit-text-stroke:0.2px_#ffffff] font-normal text-white text-base md:text-[18px] tracking-[0.51px]">
              COMMUNITY
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Navigation and CTA */}
      <nav className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        lg:flex
        flex-col lg:flex-row
        items-center gap-6 lg:gap-10
        absolute lg:relative
        top-full lg:top-auto
        left-0 lg:left-auto
        w-full lg:w-auto
        bg-[#060606] lg:bg-transparent
        p-4 lg:p-0
        border-t lg:border-t-0 border-gray-800
      `}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="font-normal text-white text-lg tracking-[0] leading-[24px] hover:text-gray-300 transition-colors w-full lg:w-auto text-center"
          >
            {item.label}
          </a>
        ))}

        <Button 
          className="w-full lg:w-auto px-8 py-3 text-lg bg-[#2d6ef7] rounded-[200px] shadow-[0px_0px_50px_#1e5effd4] font-normal text-white hover:bg-[#2d6ef7]/90 transition-colors"
          asChild
        >
          <a 
            href="https://bento.me/africablockchaincommunity" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Join us
          </a>
        </Button>
      </nav>
    </header>
  );
};
