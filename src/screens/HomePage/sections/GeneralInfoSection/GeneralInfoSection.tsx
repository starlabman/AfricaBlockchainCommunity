import React from "react";
import { ArrowUpRight, Mail, Phone, MapPin, MenuSquare } from "lucide-react";

export const GeneralInfoSection = (): JSX.Element => {
  const contactInfo = [
    {
      id: 1,
      title: "Email",
      value: "contact@africablockchain.org",
      href: "mailto:contact@africablockchain.org",
      icon: <Mail className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Our Bento",
      value: "Bento",
      href: "https://bento.me/africablockchaincommunity",
      icon: <MenuSquare className="w-5 h-5" />
    },
   
    {
      id: 3,
      title: "Location",
      value: "Lomé, Togo",
      href: "https://maps.google.com/?q=Lomé,Togo",
      icon: <MapPin className="w-5 h-5" />
    },
  
    {
      id: 4,
      title: "Contact / Mobile Money",
      value: "+228 98244850 / +228 93742473",
      href: "tel:+22898244850",
      icon: <Phone className="w-5 h-5" />
    }
  ];
  const socialLinks = [
    // {
    //   id: 0,
    //   href: "mailto:contact@africablockchain.org",
    //   src: "/email.svg",
    //   alt: "Email",
    //   color: "#2d6ef7"
    // },
    {
      id: 1,
      href: "https://twitter.com/afroblockchain_",
      src: "/lpyn0v6vjxpc4eim0cgpdmh32t8-svg.svg",
      alt: "Twitter",
      color: "#1DA1F2"
    },
    {
      id: 2,
      href: "https://t.me/AfricaBlockchainCommunity",
      src: "/link---img.svg",
      alt: "Telegram",
      color: "#0088cc"
    },
    {
      id: 3,
      href: "https://wa.me/+22898244850",
      src: "/whatsapp.svg", // Vous devrez remplacer cette image par celle de WhatsApp
      alt: "WhatsApp",
      color: "#25D366"
    },
    {
      id: 4,
      href: "https://www.linkedin.com/company/africa-blockchain-community",
      src: "/linkedin.svg", // Utiliser une image existante en attendant d'avoir l'icône LinkedIn
      alt: "LinkedIn",
      color: "#0077B5"
    }, {
      id: 5,
      href: "https://github.com/AfroBlockchainCommunity",
      src: "/github.svg",
      alt: "Github",
      color: "#24292e"
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
    <section id="info" className="relative w-full bg-gradient-to-b from-white to-gray-50 min-h-[80vh] flex flex-col justify-between">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 items-center">
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
                href="https://calendly.com/africablockchaincommunity/partnership/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-[#2d6ef7] hover:bg-[#2d6ef7]/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg font-medium min-w-[220px] text-center relative overflow-hidden"
              >
                <span className="relative z-10">Schedule a Call</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2d6ef7] to-[#2d6ef7]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Header Section - Right Side */}
          <div className="flex flex-col items-center h-full">
            <div className="flex flex-col items-center w-full gap-10 sm:gap-12 mb-8 sm:mb-10">
              {/* Contact Info */}
              <div className="w-full max-w-sm">
                {/* <div className="grid grid-cols-2 gap-8 sm:gap-10">
                  {contactInfo.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center group hover:transform hover:translate-y-[-4px] transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#2d6ef7]/5 text-[#2d6ef7] mb-3 group-hover:bg-[#2d6ef7] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-500 font-medium">{item.title}</span>
                        <span className="text-base text-gray-700 font-medium group-hover:text-[#2d6ef7] whitespace-nowrap">{item.value}</span>
                      </div>
                    </a>
                  ))}
                </div> */}
              </div>
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center">
              <div className="relative w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[150px] md:h-[180px] p-4 transition-all duration-300 hover:scale-105">
                <img src="/logo-ABC.png" alt="ABC Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-10">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-100 hover:bg-[#2d6ef7] hover:text-white hover:scale-110 transform transition-all duration-300"
                  aria-label={link.alt}
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
            &copy; 2025 Africa Blockchain Community.
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
