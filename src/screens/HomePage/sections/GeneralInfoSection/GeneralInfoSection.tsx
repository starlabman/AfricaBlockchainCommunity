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
    <section className="relative w-full bg-white min-h-screen flex flex-col">
      <div className="container max-w-[1200px] mx-auto px-6 py-16 flex-grow">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Main Content - Left Side */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-gray-900 text-4xl md:text-6xl font-bold mb-8 text-center md:text-left max-w-[600px]">
              Africa Blockchain Community
            </h1>
            <p className="text-gray-600 text-xl md:text-2xl mb-12 text-center md:text-left max-w-[520px]">
              Join us in shaping Africa's blockchain future. Whether you're an innovator, developer, or enthusiast—we're here to collaborate and build together.
            </p>
            <div className="flex justify-center w-full md:justify-start">
              <a
                href="https://calendly.com/abc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#2d6ef7] hover:bg-[#2d6ef7]/90 text-white rounded-lg transition-colors text-lg font-medium min-w-[200px] text-center"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Header Section - Right Side */}
          <div className="flex flex-col items-center md:items-end justify-start h-full">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-12">
              <div className="relative w-[120px] h-[120px]">
                <img src="/intersect.svg" alt="ABC Logo" className="w-full h-full" />
              </div>
              <span className="text-gray-900 text-3xl font-bold">ABC</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mb-12">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 hover:bg-[#2d6ef7] hover:text-white transition-colors duration-300"
                >
                  <img src={link.src} alt={link.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Menu Navigation */}
            {/* <nav className="flex flex-wrap justify-center gap-8">
              {menuLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav> */}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-4 mt-auto">
          <div className="font-normal text-gray-600 text-base">
            &copy; 2025 ABC.
          </div>
          <div>
          <nav className="flex flex-wrap justify-center gap-8">
              {menuLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition text-base"
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
