import React from "react";

export const GeneralInfoSection = (): JSX.Element => {
  const socialLinks = [
    {
      id: 1,
      href: "https://twitter.com/afroblockchain_",
      src: "/lpyn0v6vjxpc4eim0cgpdmh32t8-svg.svg",
      alt: "Twitter",
    },
    {
      id: 2,
      href: "https://t.me/AfricaBlockchainCommunity",
      src: "/link---img.svg",
      alt: "Telegram",
    },
    {
      id: 3,
      href: "https://github.com/AfroBlockchainCommunity",
      src: "/link---img-1.svg",
      alt: "GitHub",
    }
  ];

  const menuLinks = [
    {
      id: 1,
      href: "#home",
      label: "Home",
    },
    {
      id: 2,
      href: "#about",
      label: "About",
    },
    {
      id: 3,
      href: "#events",
      label: "Events",
    },
    {
      id: 4,
      href: "#community",
      label: "Community",
    },
    {
      id: 5,
      href: "#contact",
      label: "Contact",
    }
  ];

  const footerLinks = [
    { id: 1, text: "Privacy Policy", href: "/privacy-policy" },
    { id: 2, text: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <section id="info" className="relative w-full bg-white min-h-[80vh] flex flex-col justify-between">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Main Content - Left Side */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center md:text-left max-w-[600px]">
              Africa Blockchain Community
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-center md:text-left max-w-[520px]">
              Join us in shaping Africa's blockchain future. Whether you're an innovator, developer, or enthusiast—we're here to collaborate and build together.
            </p>
            <div className="flex justify-center w-full md:justify-start">
              <a
                href="https://calendly.com/abc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-[#2d6ef7] hover:bg-[#2d6ef7]/90 text-white rounded-lg transition-colors text-base sm:text-lg font-medium min-w-[200px] text-center"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Header Section - Right Side */}
          <div className="flex flex-col items-center md:items-end justify-start h-full">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="relative w-[100px] sm:w-[120px] h-[100px] sm:h-[120px]">
                <img src="/intersect.svg" alt="ABC Logo" className="w-full h-full" />
              </div>
              <span className="text-gray-900 text-2xl sm:text-3xl font-bold">ABC</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-12">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gray-100 hover:bg-[#2d6ef7] hover:text-white transition-colors duration-300"
                >
                  <img src={link.src} alt={link.alt} className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row items-center justify-between pt-8 border-t border-gray-200">
          <div className="font-normal text-gray-600 text-sm sm:text-base order-3 md:order-1">
            &copy; 2025 ABC.
          </div>
          <div className="order-1 md:order-2 w-full md:w-auto">
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {menuLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base sm:text-lg font-medium whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6 sm:gap-8 order-2 md:order-3">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition text-sm sm:text-base"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
